import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Topo'; // Importar o Menu
import Footer from './Footer'; // Importar o Footer
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';


function App() {
  return (
    <Router>
      <Menu /> {/* Menu visível em todas as páginas */}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/sobre" element={<Sobre />} /> {/* Página "Sobre" */}
        <Route path="/contato" element={<Contato />} /> {/* Página "Contato" */}

      </Routes>

      <Footer /> {/* Rodapé visível em todas as páginas */}
    </Router>
  );
}



export default App;
