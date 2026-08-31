/**
 * Hook de Pagamento Pix
 * Gerencia a lógica de criação de pagamentos via Pix.
 */

import { useState } from "react";
import api from "../services/api";

export default function usePixPayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pixData, setPixData] = useState(null);

  async function createPixPayment(productId, email) {
    setLoading(true);
    setError(null);

    try {
      // Valida o email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Email inválido");
      }

      // Chama a API
      const data = await api.createPixCheckout(productId, email);
      setPixData(data);
      return data;
    } catch (err) {
      const errorMessage = err.message || "Erro ao criar pagamento Pix";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  function clearPixData() {
    setPixData(null);
    setError(null);
  }

  return {
    loading,
    error,
    pixData,
    createPixPayment,
    clearPixData,
  };
}
