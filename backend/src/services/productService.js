/**
 * Serviço de Produtos
 * Contém a lógica de negócio relacionada a produtos.
 */

const { products } = require("../models/product.model");

/**
 * Obtém um produto pelo ID
 * @param {string} id - ID do produto
 * @returns {Object|null} Produto ou null se não encontrado
 */
function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

/**
 * Lista todos os produtos
 * @returns {Array} Lista de produtos
 */
function listProducts() {
  return products;
}

module.exports = {
  getProductById,
  listProducts,
};
