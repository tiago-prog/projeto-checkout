/**
 * Configuração do Mercado Pago
 * Inicializa o cliente do Mercado Pago com o Access Token (SDK v3.x).
 */

const { MercadoPagoConfig, Payment, Preference } = require("mercadopago");

if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
  throw new Error("MERCADOPAGO_ACCESS_TOKEN não está definida no .env");
}

// Inicializa o cliente do Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

// Exporta tanto o cliente quanto as classes de Payment e Preference
module.exports = {
  client,
  Payment,
  Preference,
};
