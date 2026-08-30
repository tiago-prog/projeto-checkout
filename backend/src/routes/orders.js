/**
 * Rotas de Pedidos
 * Define os endpoints relacionados a pedidos.
 */

const express = require("express");
const {
  createNewOrder,
  getOrder,
  getAllOrders,
} = require("../controllers/orderController");

const router = express.Router();

// GET /api/orders
router.get("/", getAllOrders);

// POST /api/orders
router.post("/", createNewOrder);

// GET /api/orders/:id
router.get("/:id", getOrder);

module.exports = router;
