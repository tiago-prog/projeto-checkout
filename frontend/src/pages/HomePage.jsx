/**
 * HomePage
 * Página principal de checkout do produto.
 */

import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import api from "../services/api";

const PRODUCT_ID = "prod_pdf_teste";

export default function HomePage() {
  const { product, loading, error } = useProduct(PRODUCT_ID);
  const [buying, setBuying] = useState(false);
  const [buyError, setBuyError] = useState(null);

  async function handleBuy() {
    if (!product) return;

    setBuying(true);
    setBuyError(null);

    try {
      // Cria uma sessão de checkout no Stripe
      const data = await api.createCheckout(product.id);

      // Redireciona para o checkout do Stripe
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de checkout não recebida");
      }
    } catch (err) {
      setBuyError(err.message);
      setBuying(false);
      console.error("Erro no checkout:", err);
    }
  }

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ color: "#666" }}>Carregando produto...</p>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ color: "#c00", marginBottom: "1rem" }}>Erro: {error}</p>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          Verifique se o backend está rodando em http://localhost:3001
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", maxWidth: 480 }}>
      <ProductCard product={product} onBuy={handleBuy} buying={buying} />

      {buyError && product && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 8,
            color: "#991b1b",
          }}
        >
          <strong>Erro:</strong> {buyError}
        </div>
      )}
    </div>
  );
}
