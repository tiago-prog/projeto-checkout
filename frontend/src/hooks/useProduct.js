/**
 * Hook: useProduct
 * Gerencia o estado e carregamento de um produto.
 */

import { useState, useEffect } from "react";
import api from "../services/api";

export function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getProduct(productId);
        setProduct(data);
      } catch (err) {
        setError(err.message || "Erro ao carregar produto");
        console.error("Erro ao carregar produto:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  return { product, loading, error };
}
