/**
 * Configuração do Stripe
 * Inicializa a instância do Stripe com a chave secreta.
 */

const Stripe = require("stripe");

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY não está definida no .env");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;
