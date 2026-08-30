/**
 * Catálogo de produtos.
 * Em produção isso viria de um banco de dados.
 * O preço NUNCA deve ser aceito do front-end.
 */
const products = [
  {
    id: "prod_pdf_teste",
    name: "PDF de Teste — Guia Rápido",
    description:
      "Um PDF fictício para testar o fluxo de compra. Contém 5 páginas de conteúdo de exemplo.",
    price: 2900, // em centavos (R$ 29,00)
    currency: "brl",
    type: "pdf",
  },
];

function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

function listProducts() {
  return products;
}

module.exports = {
  getProductById,
  listProducts,
};
