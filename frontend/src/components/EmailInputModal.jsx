/**
 * Modal de Entrada de Email para Pix
 * Coleta o email do usuário antes de criar o pagamento Pix.
 */

import { useState } from "react";

export default function EmailInputModal({ productName, onSubmit, onClose, loading }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um email válido");
      return;
    }

    onSubmit(email);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>📱 Pagar com Pix</h2>
          <button onClick={onClose} className="modal-close">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body email-modal-body">
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              Digite seu email para receber a confirmação de pagamento.
            </p>

            <div className="form-group">
              <label htmlFor="email">Email para Contato</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                disabled={loading}
                autoFocus
              />
              {error && <span className="form-error">{error}</span>}
            </div>

            <div style={{
              background: "#f0f4ff",
              border: "1px solid #667eea",
              borderRadius: "8px",
              padding: "1rem",
              fontSize: "0.9rem",
              color: "#1e293b",
              lineHeight: "1.6"
            }}>
              <strong>ℹ️ Como funciona:</strong>
              <ol style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
                <li>Você receberá o QR Code para pagar</li>
                <li>Pague via Pix usando seu banco ou app</li>
                <li>A confirmação é automática</li>
              </ol>
            </div>
          </div>

          <div className="modal-footer">
            <div className="modal-actions">
              <button
                type="button"
                onClick={onClose}
                className="modal-button-secondary"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="modal-button-primary"
                disabled={loading || !email}
              >
                {loading ? (
                  <>
                    <span className="spinner" style={{
                      display: "inline-block",
                      marginRight: "0.5rem"
                    }}></span>
                    Processando...
                  </>
                ) : (
                  "Continuar para Pix"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
