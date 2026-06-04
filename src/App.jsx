import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';
import PackageDetail from './pages/PackageDetail';
import Nosotros from './pages/Nosotros';
import Resenas from './pages/Resenas';
import Hoteles from './pages/Hotels';
import Preloader from './components/Preloader';
import WelcomePreloader from './components/WelcomePreloader';
import Terms from './pages/Terms';
import Complaints from './pages/Complaints';

function App() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <WelcomePreloader onComplete={() => setShowWelcome(false)} />}
      
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            {/* Esta ruta carga tu página principal */}
            <Route path="/" element={<Home />} />
            
            {/* Esta ruta dinámica cargará el itinerario específico de TOURS */}
            <Route path="/tour/:id" element={<TourDetail />} />
            
            {/* Esta ruta dinámica cargará el detalle de PAQUETES */}
            <Route path="/paquete/:id" element={<PackageDetail />} />

            {/* Nuevas páginas independientes */}
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/resenas" element={<Resenas />} />
            <Route path="/hoteles" element={<Hoteles />} />
            
            {/* 📄 Ruta legal de términos y condiciones (CORREGIDA ADENTRO DE ROUTES) */}
            <Route path="/terminos-condiciones" element={<Terms />} />
            <Route path="/reclamaciones" element={<Complaints />} />
          </Routes>
          
          {/* Botón flotante de WhatsApp */}
          <a 
            href="https://wa.me/519XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
              <path d="M8.27 15.67a6.29 6.29 0 0 0 2.21 2.21l1.65-1.65a1 1 0 0 1 1.25-.26c.26.11.53.2.8.27l1.83.45c.42.1.86-.01 1.15-.29.29-.29.39-.73.29-1.15l-.45-1.83a1.07 1.07 0 0 1 .26-1.25l1.65-1.65a6.29 6.29 0 0 0 2.2-2.2L20.2 4.07a1 1 0 0 0-.7-.7h-3.41l-2.09 5.82a1.44 1.44 0 0 1-2.45.54l-1.3-1.3a1.44 1.44 0 0 1-.54-2.45L4.07 4.07a1 1 0 0 0-.7 America.7l.95 2.87c.78 2.34 2.1 4.29 3.86 6.05l.38.39z"/>
              <path d="M11.66 16.89a6.29 6.29 0 0 0 2.21 2.21l1.65-1.65a1 1 0 0 1 1.25-.26c.26.11.53.2.8.27l1.83.45c.42.1.86-.01 1.15-.29.29-.29.39-.73.29-1.15l-.45-1.83a1.07 1.07 0 0 1 .26-1.25l1.65-1.65a6.29 6.29 0 0 0 2.2-2.2L20.2 4.07a1 1 0 0 0-.7-.7h-3.41l-2.09 5.82a1.44 1.44 0 0 1-2.45.54l-1.3-1.3a1.44 1.44 0 0 1-.54-2.45L4.07 4.07a1 1 0 0 0-.7.7l.95 2.87c.78 2.34 2.1 4.29 3.86 6.05l.38.39z"/>
            </svg>
          </a>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;