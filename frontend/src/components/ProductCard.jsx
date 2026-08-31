/**
 * Product Card Melhorado
 * Card com design moderno para a loja com múltiplas opções de pagamento.
 */

import { useState } from "react";

export default function ProductCard({ product, onBuy, onMercadoPagoBuy, buying, mercadoPagoBuying }) {
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  if (!product) return null;

  const priceFormatted = (product.price / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const categoryEmoji = {
    pdf: "📄",
    video: "🎥",
    course: "📚",
    template: "🎨",
  };

  const emoji = categoryEmoji[product.type] || "💎";

  const isLoading = buying || mercadoPagoBuying;

  return (
    <article className="product-card">
      <div className="product-image">
        <div className="product-icon">{emoji}</div>
        <span className="product-badge">{product.type}</span>
      </div>

      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-meta">
          <span className="product-category">
            {product.type === "pdf" && "📄 Documento"}
            {product.type === "video" && "🎥 Vídeo"}
            {product.type === "course" && "📚 Curso"}
            {product.type === "template" && "🎨 Template"}
          </span>
        </div>
      </div>

      <div className="product-footer">
        <div className="product-price">
          <span className="price-label">Preço</span>
          <span className="price-value">{priceFormatted}</span>
        </div>

        <button
          onClick={() => setShowPaymentMethods(!showPaymentMethods)}
          disabled={isLoading}
          className={`buy-button ${isLoading ? "loading" : ""}`}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Processando...
            </>
          ) : (
            <>
              <span>🛒</span> Comprar Agora
            </>
          )}
        </button>

        {showPaymentMethods && !isLoading && (
          <div className="payment-methods">
            <button
              onClick={() => {
                onBuy && onBuy();
                setShowPaymentMethods(false);
              }}
              className="payment-method"
              title="Pagar com Cartão de Crédito via Stripe"
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>💳</div>
              <div>Cartão</div>
            </button>
            <button
              onClick={() => {
                onMercadoPagoBuy && onMercadoPagoBuy();
                setShowPaymentMethods(false);
              }}
              className="payment-method"
              title="Pagar com Pix, Cartão ou Boleto via Mercado Pago"
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📱</div>
              <div>Pix/MP</div>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
