/**
 * Controlador de Pedidos
 * Responsável por lidar com requisições HTTP relacionadas a pedidos.
 */

const { createOrder, getOrderById, listOrders } = require("../services/orderService");
const { getProductById } = require("../services/productService");
const stripe = require("../config/stripe");

/**
 * POST /api/orders
 * Cria um novo pedido com base no productId
 * IMPORTANTE: O preço é validado no servidor, nunca no front-end
 */
function createNewOrder(req, res) {
  try {
    const { productId } = req.body;

    // Validação
    if (!productId || typeof productId !== "string") {
      return res.status(400).json({
        error: "productId é obrigatório e deve ser uma string",
      });
    }

    // Busca o produto no "banco de dados"
    const product = getProductById(productId);

    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    // Cria o pedido com o preço obtido do servidor
    const order = createOrder({
      productId: product.id,
      productName: product.name,
      price: product.price,
      currency: product.currency,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({ error: "Erro ao criar pedido" });
  }
}

/**
 * GET /api/orders/:id
 * Obtém um pedido específico
 */
function getOrder(req, res) {
  try {
    const { id } = req.params;
    const order = getOrderById(id);

    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }

    res.json(order);
  } catch (error) {
    console.error("Erro ao buscar pedido:", error);
    res.status(500).json({ error: "Erro ao buscar pedido" });
  }
}

/**
 * GET /api/orders
 * Lista todos os pedidos
 */
function getAllOrders(req, res) {
  try {
    const orders = listOrders();
    res.json(orders);
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    res.status(500).json({ error: "Erro ao listar pedidos" });
  }
}

/**
 * POST /api/checkout
 * Cria uma sessão de checkout do Stripe
 * Fluxo:
 * 1. Valida productId
 * 2. Busca produto (preço real do servidor)
 * 3. Cria pedido interno com status "pending"
 * 4. Cria sessão Stripe
 * 5. Retorna URL de checkout
 */
async function createCheckout(req, res) {
  try {
    const { productId } = req.body;

    // Validação
    if (!productId || typeof productId !== "string") {
      return res.status(400).json({
        error: "productId é obrigatório e deve ser uma string",
      });
    }

    // Busca o produto (garante preço real)
    const product = getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    // Cria pedido interno (status pending)
    const order = createOrder({
      productId: product.id,
      productName: product.name,
      price: product.price,
      currency: product.currency,
    });

    // Cria sessão de checkout no Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description || "Produto digital",
            },
            unit_amount: product.price, // em centavos
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5174/sucesso?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5174/cancelado",
      metadata: {
        orderId: order.id,
      },
    });

    console.log(
      `[Checkout] Pedido ${order.id} → Sessão Stripe ${session.id}`
    );

    // Retorna URL para frontend redirecionar
    res.status(201).json({
      message: "Sessão de checkout criada",
      orderId: order.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Erro no checkout:", error.message);
    res.status(500).json({ error: "Falha ao criar sessão de pagamento" });
  }
}

module.exports = {
  createNewOrder,
  getOrder,
  getAllOrders,
  createCheckout,
};
