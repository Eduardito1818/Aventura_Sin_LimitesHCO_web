import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PACKAGES_DATA } from '../data/packagesData'; // 👈 Importamos tu nueva base de datos de paquetes

export default function PackageDetail() {
  // Capturamos el ID de la URL de forma dinámica (p1, p2, etc.)
  const { id } = useParams();
  
  // Buscamos el paquete específico en la nueva base de datos
  const pkg = PACKAGES_DATA.find((p) => p.id === id);

  // Forzar que la pantalla cargue desde arriba al cambiar de paquete
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Si el ID no existe en packagesData.js, mostramos un error limpio
  if (!pkg) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center font-poppins">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl max-w-md w-full">
          <h2 className="text-2xl font-black text-[#f37021] uppercase mb-2">Paquete no encontrado</h2>
          <p className="text-slate-400 text-sm mb-6">El circuito que buscas no está disponible en nuestra base de datos actual.</p>
          <Link to="/" className="bg-[#004a8c] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-800 transition-colors block text-center">
            ← Regresar al Inicio
          </Link>
        </div>
      </div>
    );
  }

  // --- ⚙️ ESTADOS INTERACTIVOS PARA EL MAQUETADO DEFINITIVO ---
  const [activeImage, setActiveImage] = useState(pkg.imagen);
  const [openDay, setOpenDay] = useState(0); // El Día 1 (índice 0) inicia abierto por defecto
  const [selectedHotel, setSelectedHotel] = useState(pkg.alojamientos[0]);
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(2); // Base comercial por defecto
  const [children, setChildren] = useState(0);

  // Función para estructurar el mensaje automatizado hacia el WhatsApp de la agencia
  const handleWhatsAppRedirect = () => {
    const baseText = `¡Hola Aventura Sin Límites! Deseo cotizar el paquete: *${pkg.nombre}*.\n\n` +
                     `• *Opción de Alojamiento:* ${selectedHotel}\n` +
                     `• *Fecha de Llegada:* ${travelDate || 'Por definir'}\n` +
                     `• *Cantidad de Adultos:* ${adults}\n` +
                     `• *Cantidad de Niños:* ${children}`;
    
    // Puedes reemplazar las X por el número telefónico real de tu agencia
    const whatsappUrl = `https://wa.me/519XXXXXXXX?text=${encodeURIComponent(baseText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins pb-24">
      
      {/* 🏞️ HERO INMERSIVO (Ocupa el 65% de la pantalla y sube detrás del Navbar) */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-slate-900">
        {/* Imagen de fondo dinámica */}
        <img 
          src={activeImage} 
          alt={pkg.nombre} 
          className="w-full h-full object-cover animate-fade-in duration-700"
        />
        
        {/* Capa de degradado oscuro premium para dar contraste al texto y Navbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-black/40 to-black/70" />

        {/* Contenido Central del Hero */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 max-w-7xl mx-auto w-full z-10">
          {/* Migas de Pan / Breadcrumbs */}
          <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">
            Inicio › Paquetes Exclusivos › {pkg.duracion}
          </p>
          
          {/* Título Monumental */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-4xl leading-none drop-shadow-md">
            {pkg.nombre}
          </h1>

          {/* Sistema de Calificación y Reviews */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex text-[#f37021] text-lg">★★★★★</div>
            <span className="text-white font-black text-sm bg-[#f37021] px-2.5 py-0.5 rounded-md text-xs tracking-wider">
              4.9
            </span>
            <span className="text-white/90 text-xs font-bold uppercase tracking-wider">
              (120 Reseñas Reales)
            </span>
          </div>
        </div>
      </div>

      {/* 📊 CUERPO PRINCIPAL CON LA BARRA FLOTANTE */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 -mt-10">
        
        {/* 🎛️ BARRA DE ATRIBUTOS FLOTANTE BLANCA */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center mb-12">
          
          {/* Atributo 1: Duración */}
          <div className="flex items-center gap-4 px-4 border-r border-transparent md:border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl text-[#004a8c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Duración</p>
              <p className="text-sm font-black text-[#004a8c] uppercase mt-1 tracking-tight">{pkg.duracion}</p>
            </div>
          </div>

          {/* Atributo 2: Capacidad de Grupo */}
          <div className="flex items-center gap-4 px-4 md:border-r md:border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl text-[#004a8c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Grupo</p>
              <p className="text-sm font-black text-[#004a8c] uppercase mt-1 tracking-tight">{pkg.grupoMax}</p>
            </div>
          </div>

          {/* Atributo 3: Idiomas */}
          <div className="flex items-center gap-4 px-4 border-r border-transparent md:border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl text-[#004a8c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6 6-6"/><path d="m4 14 6-6 8 8"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Idiomas</p>
              <p className="text-sm font-black text-[#004a8c] uppercase mt-1 tracking-tight">{pkg.idiomas}</p>
            </div>
          </div>

          {/* Atributo 4: Dificultad del Circuito */}
          <div className="flex items-center gap-4 px-4">
            <div className="p-3 bg-slate-50 rounded-2xl text-[#004a8c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Dificultad</p>
              <p className="text-sm font-black text-[#004a8c] uppercase mt-1 tracking-tight">{pkg.dificultad}</p>
            </div>
          </div>

        </div>

        {/* 🚧 EN EL SIGUIENTE BLOQUE INSTALAREMOS EL GRID ASIMÉTRICO (COLUMNA IZQUIERDA Y TARJETA FLOTANTE) */}
        <div className="text-center py-8 text-slate-400 text-xs font-bold uppercase tracking-wider bg-white rounded-3xl border border-dashed border-slate-200">
          Estructura de Cabecera Lista. Listos para el Grid de Contenido.
        </div>

      </div>
    </div>
  );
}