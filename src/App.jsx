import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 👈 1. IMPORTAR EL NAVBAR
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';
import Nosotros from './pages/Nosotros';
import Resenas from './pages/Resenas';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {}
      
      <Routes>
        {/* Esta ruta carga tu página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Esta ruta dinámica cargará el itinerario específico */}
        <Route path="/tour/:id" element={<TourDetail />} />
        
        {/* Nuevas páginas independientes */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/resenas" element={<Resenas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;