/**
 * Cliente HTTP da API
 * Centraliza todas as requisições para o backend.
 */

import { API_ENDPOINTS } from "../constants/api";

class ApiClient {
  /**
   * Faz uma requisição genérica
   * @param {string} url - URL do endpoint
   * @param {object} options - Opções do fetch
   * @returns {Promise}
   */
  async request(url, options = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const error = new Error(data.error || `HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }

    return response.json();
  }

  // PRODUTOS
  async getProducts() {
    return this.request(API_ENDPOINTS.PRODUCTS.LIST);
  }

  async getProduct(id) {
    return this.request(API_ENDPOINTS.PRODUCTS.GET(id));
  }

  // PEDIDOS
  async createOrder(productId) {
    return this.request(API_ENDPOINTS.ORDERS.CREATE, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
  }

  async getOrder(id) {
    return this.request(API_ENDPOINTS.ORDERS.GET(id));
  }

  async listOrders() {
    return this.request(API_ENDPOINTS.ORDERS.LIST);
  }

  // CHECKOUT
  async createCheckout(productId) {
    return this.request(API_ENDPOINTS.ORDERS.CHECKOUT, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
  }

  // HEALTH CHECK
  async checkHealth() {
    return this.request(API_ENDPOINTS.HEALTH);
  }
}

export default new ApiClient();
