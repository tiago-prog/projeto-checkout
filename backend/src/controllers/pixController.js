/**
 * Controlador de Checkout Pro do Mercado Pago
 * Responsável por lidar com requisições HTTP relacionadas ao Checkout Pro.
 */

const { createCheckoutProPreference } = require("../services/pixService");

/**
 * POST /api/checkout/mercadopago
 * Cria uma preferência de pagamento para o Checkout Pro
 * Body: { productId }
 */
async function createMercadoPagoCheckout(req, res) {
  try {
    const { productId } = req.body;

    // Validações
    if (!productId || typeof productId !== "string") {
      return res.status(400).json({
        error: "productId é obrigatório e deve ser uma string",
      });
    }

    // Cria a preferência de pagamento
    const checkoutData = await createCheckoutProPreference({ productId });

    res.status(201).json(checkoutData);
  } catch (error) {
    console.error("Erro ao criar checkout Mercado Pago:", error);
    res.status(500).json({ error: error.message || "Erro ao criar checkout" });
  }
}

module.exports = {
  createMercadoPagoCheckout,
};
