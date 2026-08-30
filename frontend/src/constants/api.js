/**
 * Constantes da API
 * URLs e endpoints centralizados para fácil manutenção.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  PRODUCTS: {
    LIST: `${API_BASE_URL}/api/products`,
    GET: (id) => `${API_BASE_URL}/api/products/${id}`,
  },
  ORDERS: {
    LIST: `${API_BASE_URL}/api/orders`,
    CREATE: `${API_BASE_URL}/api/orders`,
    GET: (id) => `${API_BASE_URL}/api/orders/${id}`,
    CHECKOUT: `${API_BASE_URL}/api/checkout`,
  },
};

export default API_BASE_URL;
