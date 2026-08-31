/**
 * Serviço de Pedidos
 * Contém a lógica de negócio relacionada a pedidos.
 */

const { v4: uuidv4 } = require("uuid");
const { orders } = require("../models/order.model");

/**
 * Cria um novo pedido
 * @param {Object} orderData - Dados do pedido
 * @param {string} orderData.productId - ID do produto
 * @param {string} orderData.productName - Nome do produto
 * @param {number} orderData.price - Preço em centavos
 * @param {string} orderData.currency - Moeda (ex: "brl")
 * @returns {Object} Pedido criado
 */
function createOrder({ productId, productName, price, currency }) {
  const order = {
    id: `ord_${uuidv4().slice(0, 8)}`,
    productId,
    productName,
    price,
    currency,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  return order;
}

/**
 * Obtém um pedido pelo ID
 * @param {string} id - ID do pedido
 * @returns {Object|null} Pedido ou null se não encontrado
 */
function getOrderById(id) {
  return orders.find((o) => o.id === id) || null;
}

/**
 * Lista todos os pedidos
 * @returns {Array} Lista de pedidos
 */
function listOrders() {
  return orders;
}

/**
 * Atualiza um pedido existente
 * @param {string} id - ID do pedido
 * @param {Object} updateData - Dados a atualizar
 * @returns {Object|null} Pedido atualizado ou null se não encontrado
 */
function updateOrder(id, updateData) {
  const order = orders.find((o) => o.id === id);
  
  if (!order) {
    return null;
  }

  // Atualiza apenas os campos fornecidos
  Object.assign(order, updateData);
  return order;
}

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
};
