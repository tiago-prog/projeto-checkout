const { v4: uuidv4 } = require("uuid");

/**
 * Armazenamento em memória (só para o Projeto 0).
 * Depois substituímos por banco de dados.
 */
const orders = [];

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

function getOrderById(id) {
  return orders.find((o) => o.id === id) || null;
}

function listOrders() {
  return orders;
}

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
};
