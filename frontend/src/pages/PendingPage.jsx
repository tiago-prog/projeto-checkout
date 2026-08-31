/**
 * PendingPage
 * Página exibida quando o pagamento está pendente de confirmação.
 */

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PendingPage() {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get("order_id");

  return (
    <div className="app-container">
      <Header />

      <div className="cancel-container">
        <div className="cancel-card">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⏳</div>
          <h1 className="cancel-title" style={{ color: "#f59e0b" }}>
            Pagamento Pendente
          </h1>
          <p className="cancel-message">
            Seu pagamento está sendo processado. Assim que confirmado, você receberá
            um email com os detalhes da compra e o acesso ao produto.
          </p>

          {orderId && (
            <div className="cancel-details">
              <p>
                <strong>Pedido:</strong> {orderId}
              </p>
            </div>
          )}

          <div className="cancel-details">
            <p>
              Pagamentos via boleto podem levar até 3 dias úteis para serem compensados.
              Pagamentos via Pix são confirmados em minutos.
            </p>
            <p>
              Se tiver alguma dúvida, entre em contato com nosso suporte.
            </p>
          </div>

          <div className="cancel-actions">
            <a href="/" className="button button-primary">
              Voltar à Loja
            </a>
            <a href="#contato" className="button button-secondary">
              Falar com Suporte
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
