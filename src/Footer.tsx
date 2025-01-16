import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
      <p>© 2025 Sua Empresa - Todos os direitos reservados.</p>
      <p>
        <Link to="/termos">Termos de Uso</Link> | <Link to="/privacidade">Política de Privacidade</Link>
      </p>
    </footer>
  );
}

export default Footer;