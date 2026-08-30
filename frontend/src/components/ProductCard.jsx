/**
 * Product Card Melhorado
 * Card com design moderno para a loja.
 */

export default function ProductCard({ product, onBuy, buying }) {
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
          onClick={() => onBuy && onBuy()}
          disabled={buying}
          className={`buy-button ${buying ? "loading" : ""}`}
        >
          {buying ? (
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
      </div>
    </article>
  );
}
