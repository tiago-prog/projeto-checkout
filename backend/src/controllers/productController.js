/**
 * Controlador de Produtos
 * Responsável por lidar com requisições HTTP relacionadas a produtos.
 */

const { getProductById, listProducts } = require("../services/productService");

/**
 * GET /api/products
 * Lista todos os produtos
 */
function getAllProducts(req, res) {
  try {
    const products = listProducts();
    res.json(products);
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
}

/**
 * GET /api/products/:id
 * Obtém um produto específico pelo ID
 */
function getProduct(req, res) {
  try {
    const { id } = req.params;
    const product = getProductById(id);

    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
};
