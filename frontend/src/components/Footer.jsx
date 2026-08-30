/**
 * Footer
 * Rodapé da loja.
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nós</h4>
          <p>Loja digital com produtos de alta qualidade e preços acessíveis.</p>
        </div>

        <div className="footer-section">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#suporte">Suporte</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul>
            <li>📧 suporte@loja.com</li>
            <li>💬 Chat ao vivo</li>
            <li>📱 Redes sociais</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Loja Digital. Todos os direitos reservados.</p>
        <p className="footer-links">
          <a href="#privacidade">Privacidade</a> •
          <a href="#termos"> Termos</a> •
          <a href="#cookies"> Cookies</a>
        </p>
      </div>
    </footer>
  );
}
