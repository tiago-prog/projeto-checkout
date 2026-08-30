/**
 * HomePage
 * Página principal da loja com produtos.
 */

import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";
import { getAllProducts } from "../constants/products";
import api from "../services/api";

export default function HomePage() {
  const [products] = useState(getAllProducts());
  const [buyingId, setBuyingId] = useState(null);
  const [error, setError] = useState(null);

  async function handleBuy(productId) {
    setBuyingId(productId);
    setError(null);

    try {
      // Cria uma sessão de checkout no Stripe
      const data = await api.createCheckout(productId);

      // Redireciona para o checkout do Stripe
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de checkout não recebida");
      }
    } catch (err) {
      setError(err.message);
      setBuyingId(null);
      console.error("Erro no checkout:", err);
    }
  }

  return (
    <div className="app-container">
      <Header />

      {error && (
        <div className="error-banner">
          <div className="error-content">
            <span className="error-icon">⚠️</span>
            <p>{error}</p>
            <button onClick={() => setError(null)} className="error-close">
              ✕
            </button>
          </div>
        </div>
      )}

      <HeroSection />
      <ProductsGrid products={products} onBuy={handleBuy} buyingId={buyingId} />

      <section className="features-section">
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h4>Entrega Instantânea</h4>
            <p>Acesso imediato após a compra</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <h4>Seguro</h4>
            <p>Pagamento seguro com Stripe</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💯</span>
            <h4>Garantia</h4>
            <p>Satisfação garantida ou seu dinheiro de volta</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎁</span>
            <h4>Bônus</h4>
            <p>Acesso a conteúdo exclusivo</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
