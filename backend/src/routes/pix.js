/**
 * Rotas de Checkout com Mercado Pago (Checkout Pro)
 * Define os endpoints de checkout via Mercado Pago.
 */

const express = require("express");
const { createMercadoPagoCheckout } = require("../controllers/pixController");

const router = express.Router();

// POST /api/checkout/mercadopago
router.post("/", createMercadoPagoCheckout);

module.exports = router;
