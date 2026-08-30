/**
 * Catálogo de Produtos
 * Lista de produtos disponíveis na loja.
 */

export const products = [
  {
    id: "prod_pdf_teste",
    name: "Guia Rápido JavaScript",
    description: "Um guia completo e prático para dominar JavaScript do zero.",
    price: 2900, // R$ 29,00
    currency: "brl",
    type: "pdf",
  },
  {
    id: "prod_video_react",
    name: "React Masterclass",
    description: "Curso em vídeo: aprenda React com projetos práticos.",
    price: 4900, // R$ 49,00
    currency: "brl",
    type: "video",
  },
  {
    id: "prod_course_node",
    name: "Node.js Completo",
    description: "Curso: desenvolva aplicações backend com Node.js e Express.",
    price: 5900, // R$ 59,00
    currency: "brl",
    type: "course",
  },
  {
    id: "prod_template_ui",
    name: "UI Kit Moderno",
    description: "Template: 100+ componentes prontos para usar em seus projetos.",
    price: 3900, // R$ 39,00
    currency: "brl",
    type: "template",
  },
  {
    id: "prod_pdf_sql",
    name: "SQL para Iniciantes",
    description: "Guia prático: domine SQL e banco de dados relacional.",
    price: 1990, // R$ 19,90
    currency: "brl",
    type: "pdf",
  },
  {
    id: "prod_course_web3",
    name: "Web3 & Blockchain",
    description: "Curso: desenvolvimento de aplicações Web3 e smart contracts.",
    price: 7900, // R$ 79,00
    currency: "brl",
    type: "course",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}
