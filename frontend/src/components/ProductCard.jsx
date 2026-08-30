export default function ProductCard({ product, onBuy, buying }) {
  if (!product) return null;

  const priceFormatted = (product.price / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          padding: "2rem",
          color: "#fff",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            opacity: 0.8,
            marginBottom: "0.5rem",
          }}
        >
          Produto digital
        </span>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {product.name}
        </h1>
        <p style={{ opacity: 0.9, fontSize: "0.95rem" }}>{product.description}</p>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ fontSize: "1.75rem", fontWeight: 700 }}>{priceFormatted}</span>
          <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>pagamento único</span>
        </div>

        <button
          onClick={onBuy}
          disabled={buying}
          style={{
            width: "100%",
            padding: "0.875rem 1.5rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff",
            background: buying ? "#94a3b8" : "#0f172a",
            border: "none",
            borderRadius: 8,
            cursor: buying ? "not-allowed" : "pointer",
            transition: "background 0.15s",
          }}
        >
          {buying ? "Criando pedido..." : "Comprar em modo de teste"}
        </button>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          Nenhum pagamento real é processado.
        </p>
      </div>
    </article>
  );
}
