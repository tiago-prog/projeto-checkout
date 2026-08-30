/**
 * Rotas de Checkout
 * Define os endpoints de checkout (Stripe integration).
 */

const express = require("express");
const { createCheckout } = require("../controllers/orderController");

const router = express.Router();

// POST /api/checkout
router.post("/", createCheckout);

module.exports = router;
