/**
 * Header/Navigation
 * Barra de navegação superior da loja.
 */

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🏪</span>
          <span className="logo-text">Loja Digital</span>
        </div>
        <nav className="nav">
          <a href="#produtos" className="nav-link">Produtos</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>
        <div className="header-actions">
          <button className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
