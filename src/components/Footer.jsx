import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#004a8c] text-white font-poppins pt-16 pb-8 border-t border-[#003566]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* 🏔️ COLUMNA 1: IDENTIDAD DE LA AGENCIA */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-white text-[#004a8c] font-black px-2.5 py-1 rounded-lg text-lg shadow-xs">
              A
            </span>
            <span className="text-lg font-black uppercase tracking-tight">
              Aventura <span className="text-[#f37021]">Sin Límites</span>
            </span>
          </div>
          <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-medium max-w-sm">
            Expertos en turismo de aventura y rutas tradicionales en la región de Huánuco. Vive experiencias auténticas con guías certificados y los mejores hospedajes de la zona.
          </p>
        </div>

        {/* 🗺️ COLUMNA 2: NAVEGACIÓN Y ENLACES COMERCIALES */}
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-wider text-[#f37021] border-b border-[#f37021]/30 pb-2 max-w-[120px]">
            Navegación
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 text-xs md:text-sm font-bold text-slate-200">
            <li>
              <Link to="/" className="hover:text-[#f37021] transition-colors">
                › Inicio
              </Link>
            </li>
            <li>
              <Link to="/paquetes" className="hover:text-[#f37021] transition-colors">
                › Paquetes Destacados
              </Link>
            </li>
            <li>
              <Link to="/hoteles" className="hover:text-[#f37021] transition-colors">
                › Hoteles Aliados
              </Link>
            </li>
            <li>
              <a href="#estilos" className="hover:text-[#f37021] transition-colors">
                › Elige tu Estilo de Viaje
              </a>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-[#f37021] transition-colors">
                › Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 COLUMNA 3: SOPORTE, RESERVAS Y REDES SOCIALES */}
        <div className="space-y-5">
          <h3 className="text-sm font-black uppercase tracking-wider text-[#f37021] border-b border-[#f37021]/30 pb-2 max-w-[120px]">
            Contáctanos
          </h3>
          
          {/* Botón de WhatsApp optimizado estilo "Los Frayles" */}
          <a 
            href="https://wa.me/519XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-emerald-600 transition-all shadow-md w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            WhatsApp Directo
          </a>

          {/* 🌐 ICONOS DE REDES SOCIALES TOTALMENTE REPARADOS Y CENTRADOS */}
          <div className="space-y-2">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block">Nuestras Redes:</span>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#f37021] text-white text-xs font-black rounded-full flex items-center justify-center transition-colors border border-white/10">
                FB
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#f37021] text-white text-xs font-black rounded-full flex items-center justify-center transition-colors border border-white/10">
                IG
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#f37021] text-white text-xs font-black rounded-full flex items-center justify-center transition-colors border border-white/10">
                TK
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* 🧾 BARRA INFERIOR: COPYRIGHT + POLÍTICAS + LIBRO DE RECLAMACIONES VIRTUAL */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Lado Izquierdo: Copyright de la Agencia */}
        <p className="text-[11px] font-medium text-slate-300">
          © 2026 Aventura Sin Límites - Huánuco, Perú. Todos los derechos reservados.
        </p>
        
        {/* Lado Derecho: Enlaces Corporativos y Legales */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          
          {/* Enlace 1: Términos y Condiciones */}
          <Link 
            to="/terminos-condiciones" 
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-200 transition-colors w-full sm:w-auto justify-center"
          >
            📄 Términos y Condiciones
          </Link>

          {/* Enlace 2: Libro de Reclamaciones */}
          <Link 
            to="/reclamaciones" 
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-200 transition-colors w-full sm:w-auto justify-center"
          >
            📋 Libro de Reclamaciones
          </Link>

        </div>
      </div>

    </footer>
  );
}