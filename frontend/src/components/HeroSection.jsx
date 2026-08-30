/**
 * Hero Section
 * Seção destaque no topo da página.
 */

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Bem-vindo à Nossa Loja</h1>
        <p className="hero-subtitle">
          Produtos digitais de alta qualidade com entrega instantânea
        </p>
        <a href="#produtos" className="hero-cta">
          Explorar Produtos ↓
        </a>
      </div>
      <div className="hero-decoration">
        <div className="hero-shape"></div>
      </div>
    </section>
  );
}
