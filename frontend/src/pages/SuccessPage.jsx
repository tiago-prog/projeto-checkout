/**
 * SuccessPage
 * Página exibida após checkout bem-sucedido.
 */

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SuccessPage() {
  return (
    <div className="app-container">
      <Header />

      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h1 className="success-title">Pagamento Concluído!</h1>
          <p className="success-message">
            Obrigado pela sua compra. Seu pedido foi processado com sucesso.
          </p>

          <div className="success-details">
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value">✓ Confirmado</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Tipo</span>
              <span className="detail-value">Produto Digital</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Acesso</span>
              <span className="detail-value">Imediato</span>
            </div>
          </div>

          <p className="success-note">
            Um email de confirmação foi enviado para você com os detalhes da compra
            e instruções de acesso ao produto.
          </p>

          <div className="success-actions">
            <a href="/" className="button button-primary">
              Voltar à Loja
            </a>
            <a href="#" className="button button-secondary">
              Meus Pedidos
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
