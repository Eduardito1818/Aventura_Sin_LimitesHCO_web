import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Esta ruta carga tu página principal con todos los componentes que ya tenías */}
        <Route path="/" element={<Home />} />
        
        {/* Esta ruta dinámica cargará el itinerario específico según el ID del tour */}
        <Route path="/tour/:id" element={<TourDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;