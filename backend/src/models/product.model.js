/**
 * Modelo de Produto
 * Em produção, isso viria de um banco de dados.
 * IMPORTANTE: O preço NUNCA deve ser aceito do front-end.
 */

const products = [
  {
    id: "prod_pdf_teste",
    name: "Guia Rápido JavaScript",
    description:
      "Um guia completo e prático para dominar JavaScript do zero.",
    price: 2900, // em centavos (R$ 29,00)
    currency: "brl",
    type: "pdf",
  },
  {
    id: "prod_video_react",
    name: "React Masterclass",
    description:
      "Curso em vídeo: aprenda React com projetos práticos.",
    price: 4900, // em centavos (R$ 49,00)
    currency: "brl",
    type: "video",
  },
  {
    id: "prod_course_node",
    name: "Node.js Completo",
    description:
      "Curso: desenvolva aplicações backend com Node.js e Express.",
    price: 5900, // em centavos (R$ 59,00)
    currency: "brl",
    type: "course",
  },
  {
    id: "prod_template_ui",
    name: "UI Kit Moderno",
    description:
      "Template: 100+ componentes prontos para usar em seus projetos.",
    price: 3900, // em centavos (R$ 39,00)
    currency: "brl",
    type: "template",
  },
  {
    id: "prod_pdf_sql",
    name: "SQL para Iniciantes",
    description:
      "Guia prático: domine SQL e banco de dados relacional.",
    price: 1990, // em centavos (R$ 19,90)
    currency: "brl",
    type: "pdf",
  },
  {
    id: "prod_course_web3",
    name: "Web3 & Blockchain",
    description:
      "Curso: desenvolvimento de aplicações Web3 e smart contracts.",
    price: 7900, // em centavos (R$ 79,00)
    currency: "brl",
    type: "course",
  },
];

module.exports = {
  products,
};
