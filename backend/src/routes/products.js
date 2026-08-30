/**
 * Rotas de Produtos
 * Define os endpoints relacionados a produtos.
 */

const express = require("express");
const { getAllProducts, getProduct } = require("../controllers/productController");

const router = express.Router();

// GET /api/products
router.get("/", getAllProducts);

// GET /api/products/:id
router.get("/:id", getProduct);

module.exports = router;
