/**
 * Modal de Pagamento Pix
 * Exibe o QR Code e instruções de pagamento via Pix.
 */

import { useState } from "react";

export default function PixPaymentModal({ pixData, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!pixData) return null;

  const pixCode = pixData.qr_code || "Código PIX não disponível";

  function handleCopyCode() {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>💳 Pagar com Pix</h2>
          <button onClick={onClose} className="modal-close">
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* QR Code */}
          {pixData.qr_code_url && (
            <div className="qr-code-container">
              <img
                src={pixData.qr_code_url}
                alt="QR Code Pix"
                className="qr-code-image"
              />
              <p className="qr-code-label">
                Abra o app do seu banco e escaneie o QR Code
              </p>
            </div>
          )}

          {/* Código PIX */}
          <div className="pix-code-container">
            <label className="pix-code-label">Ou copie o código:</label>
            <div className="pix-code-box">
              <code className="pix-code">{pixCode}</code>
              <button onClick={handleCopyCode} className="copy-button">
                {copied ? "✓ Copiado!" : "📋 Copiar"}
              </button>
            </div>
          </div>

          {/* Instruções */}
          <div className="pix-instructions">
            <h3>Como funciona:</h3>
            <ol>
              <li>Abra o seu app de banco ou wallet</li>
              <li>Selecione "Pagar com Pix"</li>
              <li>Escaneie o QR Code ou copie e cole o código</li>
              <li>Confirme o pagamento</li>
              <li>Sua compra será confirmada automaticamente ✓</li>
            </ol>
          </div>

          {/* Status da Transação */}
          {pixData.status && (
            <div className="pix-status">
              <p>Status do pedido: <strong>{pixData.status}</strong></p>
              <p>ID do Pedido: <code>{pixData.orderId}</code></p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-button-secondary">
            Fechar
          </button>
          <p className="modal-info-text">
            ⏱️ A confirmação é automática quando o pagamento é concluído
          </p>
        </div>
      </div>
    </div>
  );
}
