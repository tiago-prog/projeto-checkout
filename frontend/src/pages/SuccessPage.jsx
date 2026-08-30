/**
 * SuccessPage
 * Página exibida após checkout bem-sucedido.
 */

export default function SuccessPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem", color: "#059669" }}>
        ✓ Pagamento concluído
      </h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Seu pagamento foi processado com sucesso. A confirmação oficial chega
        pelo webhook (Projeto 2).
      </p>
      <p style={{ color: "#999", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
        Por enquanto, nada foi liberado ainda.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
          fontSize: "0.95rem",
        }}
      >
        Voltar ao início
      </a>
    </div>
  );
}
