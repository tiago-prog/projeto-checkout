/**
 * CancelPage
 * Página exibida quando o usuário cancela o checkout.
 */

export default function CancelPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem", color: "#dc2626" }}>
        ✗ Pagamento cancelado
      </h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Você cancelou o checkout. Nenhum valor foi cobrado.
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
        Tentar novamente
      </a>
    </div>
  );
}
