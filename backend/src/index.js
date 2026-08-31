/**
 * Backend - Projeto 0 (Fundamentos Web)
 * Servidor Express com suporte a produtos, pedidos e integração Stripe.
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const corsConfig = require("./config/cors");
const stripe = require("./config/stripe");

// Rotas
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const checkoutRouter = require("./routes/checkout");
const pixRouter = require("./routes/pix");
const webhooksRouter = require("./routes/webhooks");

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors(corsConfig));
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend do Projeto 0 rodando",
    environment: process.env.NODE_ENV || "development",
  });
});

// Rotas
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/checkout", checkoutRouter);
app.use("/api/checkout/mercadopago", pixRouter);
app.use("/api/webhooks", webhooksRouter);

// Middleware de erro (sempre no final)
app.use((err, req, res, next) => {
  console.error("Erro:", err);
  res.status(err.status || 500).json({
    error: err.message || "Erro interno do servidor",
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Backend rodando em http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Docs: http://localhost:${PORT}/api/docs\n`);
});

