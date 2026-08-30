/**
 * CancelPage
 * Página exibida quando o usuário cancela o checkout.
 */

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CancelPage() {
  return (
    <div className="app-container">
      <Header />

      <div className="cancel-container">
        <div className="cancel-card">
          <div className="cancel-icon">✕</div>
          <h1 className="cancel-title">Pagamento Cancelado</h1>
          <p className="cancel-message">
            Você cancelou o checkout. Nenhum valor foi cobrado na sua conta.
          </p>

          <div className="cancel-details">
            <p>
              Sem problemas! Você pode voltar e tentar novamente sempre que quiser.
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
