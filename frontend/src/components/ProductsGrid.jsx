/**
 * Products Grid
 * Grade de produtos com layout responsivo.
 */

import ProductCard from "./ProductCard";

export default function ProductsGrid({ products, onBuy, buyingId }) {
  if (!products || products.length === 0) {
    return (
      <section className="products-section">
        <p className="no-products">Nenhum produto disponível</p>
      </section>
    );
  }

  return (
    <section className="products-section" id="produtos">
      <div className="section-header">
        <h2>Nossos Produtos</h2>
        <p>Escolha entre nossos produtos digitais de qualidade</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuy={() => onBuy(product.id)}
            buying={buyingId === product.id}
          />
        ))}
      </div>
    </section>
  );
}
