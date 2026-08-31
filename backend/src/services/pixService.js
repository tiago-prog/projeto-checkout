/**
 * Serviço de Pagamentos com Checkout Pro do Mercado Pago
 * Cria preferências de pagamento para o Checkout Pro.
 */

const { client, Preference } = require("../config/mercadopago");
const { getProductById } = require("./productService");
const { createOrder } = require("./orderService");

/**
 * Cria uma preferência de pagamento para o Checkout Pro
 * @param {Object} params - Parâmetros
 * @param {string} params.productId - ID do produto
 * @returns {Object} Dados da preferência (com URL de checkout)
 */
async function createCheckoutProPreference({ productId }) {
  // Validações
  if (!productId) {
    throw new Error("productId é obrigatório");
  }

  // Busca o produto
  const product = getProductById(productId);
  if (!product) {
    throw new Error("Produto não encontrado");
  }

  // Cria um pedido interno
  const order = createOrder({
    productId: product.id,
    productName: product.name,
    price: product.price,
    currency: product.currency,
  });

  try {
    // auto_return só é aceito pelo MP quando as back_urls são URLs públicas (não localhost)
    const frontendUrl = process.env.FRONTEND_URL || "";
    const isPublicUrl =
      frontendUrl.startsWith("https://") ||
      (frontendUrl.startsWith("http://") && !frontendUrl.includes("localhost") && !frontendUrl.includes("127.0.0.1"));

    // Cria a preferência para o Checkout Pro
    const preferenceData = {
      items: [
        {
          id: product.id,
          title: product.name,
          description: product.description || "",
          quantity: 1,
          unit_price: product.price / 100, // Converte de centavos para reais
          currency_id: "BRL",
        },
      ],
      payer: {
        name: "Cliente",
        email: "cliente@test.com", // Será preenchido pelo usuário no checkout
      },
      back_urls: {
        success: `${frontendUrl}/sucesso?order_id=${order.id}`,
        failure: `${frontendUrl}/cancelado`,
        pending: `${frontendUrl}/pendente`,
      },
      ...(isPublicUrl && { auto_return: "approved" }),
      external_reference: order.id,
      notification_url: `${process.env.BACKEND_URL}/api/webhooks/mercadopago`,
    };

    console.log("Criando preferência:", JSON.stringify(preferenceData, null, 2));

    // Instancia a classe Preference com o client
    const preference = new Preference(client);
    const preferenceResponse = await preference.create({
      body: preferenceData,
    });

    console.log("Preferência criada:", preferenceResponse.id);

    // Retorna os dados para o frontend
    return {
      orderId: order.id,
      preferenceId: preferenceResponse.id,
      checkoutUrl: preferenceResponse.init_point, // URL do checkout
      sandboxUrl: preferenceResponse.sandbox_init_point, // URL sandbox se disponível
    };
  } catch (error) {
    console.error("Erro ao criar preferência:", error);
    console.error("Status:", error.status);
    console.error("Message:", error.message);

    throw new Error(
      `Erro ao criar preferência de pagamento: ${error.message || "Erro desconhecido"}`
    );
  }
}

module.exports = {
  createCheckoutProPreference,
};
