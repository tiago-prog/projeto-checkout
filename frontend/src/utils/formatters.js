/**
 * Formatadores e utilitários
 */

/**
 * Formata preço em centavos para moeda
 * @param {number} cents - Valor em centavos
 * @param {string} currency - Código da moeda (ex: "brl")
 * @returns {string} Valor formatado
 */
export function formatPrice(cents, currency = "brl") {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency.toUpperCase(),
  });

  return formatter.format(cents / 100);
}

/**
 * Obtém parâmetro da URL
 * @param {string} param - Nome do parâmetro
 * @returns {string|null} Valor do parâmetro ou null
 */
export function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

/**
 * Valida se um valor é um ID de produto válido
 * @param {string} id - ID a validar
 * @returns {boolean}
 */
export function isValidProductId(id) {
  return typeof id === "string" && id.length > 0;
}
