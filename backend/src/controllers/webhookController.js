/**
 * Controlador de Webhooks do Mercado Pago
 * Processa notificações IPN/Webhook enviadas pelo Mercado Pago.
 *
 * Documentação: https://www.mercadopago.com.br/developers/pt/docs/your-integrations/notifications/webhooks
 */

const { client, Payment } = require("../config/mercadopago");
const { getOrderById, updateOrder } = require("../services/orderService");

/**
 * POST /api/webhooks/mercadopago
 * Recebe notificações de pagamento do Mercado Pago.
 *
 * O Mercado Pago envia dois tipos de notificações:
 * - IPN (Instant Payment Notification): campo `topic` + `id`
 * - Webhooks: campo `type` + `data.id`
 */
async function handleMercadoPagoWebhook(req, res) {
  // Responde 200 imediatamente para evitar retentativas desnecessárias do MP
  res.status(200).send("OK");

  try {
    const body = req.body;

    // Suporta tanto o formato IPN (topic/id) quanto o formato Webhook (type/data.id)
    const topic = body.topic || body.type;
    const paymentId = body.id || body.data?.id;

    console.log("Webhook Mercado Pago recebido:", { topic, paymentId, body });

    // Só processa notificações de pagamento
    if (topic !== "payment") {
      console.log(`Tópico ignorado: ${topic}`);
      return;
    }

    if (!paymentId) {
      console.warn("Webhook sem paymentId:", body);
      return;
    }

    // Busca os detalhes do pagamento na API do Mercado Pago
    const paymentClient = new Payment(client);
    const payment = await paymentClient.get({ id: paymentId });

    console.log("Detalhes do pagamento:", {
      id: payment.id,
      status: payment.status,
      external_reference: payment.external_reference,
    });

    // O external_reference é o orderId que definimos ao criar a preferência
    const orderId = payment.external_reference;
    if (!orderId) {
      console.warn("Pagamento sem external_reference:", payment.id);
      return;
    }

    // Busca o pedido interno
    const order = getOrderById(orderId);
    if (!order) {
      console.warn(`Pedido não encontrado para external_reference: ${orderId}`);
      return;
    }

    // Mapeia o status do Mercado Pago para o status interno do pedido
    const statusMap = {
      approved: "paid",
      pending: "pending",
      authorized: "pending",
      in_process: "pending",
      in_mediation: "pending",
      rejected: "failed",
      cancelled: "cancelled",
      refunded: "refunded",
      charged_back: "refunded",
    };

    const newStatus = statusMap[payment.status] || "pending";

    // Atualiza o pedido com o status e dados do pagamento
    const updated = updateOrder(orderId, {
      status: newStatus,
      paymentId: String(payment.id),
      paymentStatus: payment.status,
      paymentMethod: payment.payment_type_id,
      paidAt: payment.status === "approved" ? new Date().toISOString() : undefined,
    });

    console.log(`Pedido ${orderId} atualizado para status: ${newStatus}`, updated);
  } catch (error) {
    // Não relançamos o erro pois já respondemos 200.
    // Logamos para diagnóstico mas não queremos retentativas do MP.
    console.error("Erro ao processar webhook do Mercado Pago:", error.message, error);
  }
}

module.exports = {
  handleMercadoPagoWebhook,
};
