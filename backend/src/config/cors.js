/**
 * Configuração de CORS
 * Define as políticas de Cross-Origin Resource Sharing.
 */

const corsConfig = {
  origin: process.env.CORS_ORIGIN || "http://localhost:5174",
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
