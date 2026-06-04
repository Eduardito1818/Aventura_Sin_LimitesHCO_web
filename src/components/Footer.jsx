import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#004a8c] text-white font-poppins pt-16 pb-8 border-t border-[#003566]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* 🏔️ COLUMNA 1: IDENTIDAD DE LA AGENCIA Y DATOS DE CONTACTO */}
        <div className="space-y-6">
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

          {/* 📍 COMPONENTE DE DIRECCIÓN, TELÉFONO Y CORREO (Inspirado en image_322917.png) */}
          <div className="space-y-3.5 pt-2 border-t border-white/10 text-slate-200 text-xs md:text-sm font-semibold">
            
            {/* Dirección Física */}
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Jr. General Prado N° 740, Huánuco, Perú</span>
            </div>

            {/* Teléfono de Central de Reservas */}
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+51 962 840 311</span>
            </div>

            {/* Correo Electrónico Institucional */}
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="lowercase">reservas@aventurasinlimites.com</span>
            </div>

          </div>
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

          {/* 🌐 ICONOS DE REDES SOCIALES SELECCIONADAS (Facebook, Instagram y TikTok) */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block">
              Nuestras Redes:
            </span>
            <div className="flex items-center gap-3">
              
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-[#f37021] hover:scale-105 text-white rounded-full flex items-center justify-center transition-all border border-white/5 group shadow-xs"
                title="Síguenos en Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-[#f37021] hover:scale-105 text-white rounded-full flex items-center justify-center transition-all border border-white/5 group shadow-xs"
                title="Síguenos en Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-[#f37021] hover:scale-105 text-white rounded-full flex items-center justify-center transition-all border border-white/5 group shadow-xs"
                title="Síguenos en TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
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