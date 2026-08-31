/**
 * Rota de Webhooks do Mercado Pago
 * Recebe notificações IPN/Webhook do Mercado Pago sobre atualizações de pagamento.
 */

const express = require("express");
const { handleMercadoPagoWebhook } = require("../controllers/webhookController");

const router = express.Router();

// POST /api/webhooks/mercadopago
router.post("/mercadopago", handleMercadoPagoWebhook);

module.exports = router;
