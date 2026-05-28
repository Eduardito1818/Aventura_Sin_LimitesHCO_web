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
{/* 📊 CUERPO PRINCIPAL CON LA BARRA FLOTANTE Y EL GRID ASIMÉTRICO */}
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

        {/* 🗺️ GRID ASIMÉTRICO: CONTENIDO VS TARJETA DE RESERVA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y DETALLES (2/3 de ancho) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Descripción General */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-black text-[#004a8c] uppercase tracking-tight mb-4 border-b border-slate-100 pb-3">
                Descripción General
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {pkg.descripcion}
              </p>
            </div>

            {/* Galería Fotográfica Interactiva */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-black text-[#004a8c] uppercase tracking-tight mb-4">
                Galería de la Ruta
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {pkg.galeria.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`h-24 md:h-32 rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-[#f37021] scale-95 shadow-md' : 'border-transparent hover:scale-102'
                    }`}
                  >
                    <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Itinerario Detallado (Acordeón Interactivo) */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-black text-[#004a8c] uppercase tracking-tight mb-6">
                Itinerario Detallado
              </h2>
              <div className="space-y-4">
                {pkg.itinerario.map((item, idx) => {
                  const isOpened = openDay === idx;
                  return (
                    <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-2xs">
                      <button
                        onClick={() => setOpenDay(isOpened ? -1 : idx)}
                        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                          isOpened ? 'bg-[#004a8c]/5 text-[#004a8c]' : 'bg-white text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-sm font-black uppercase tracking-tight flex items-center gap-3">
                          <span className="text-[#f37021]">{item.dia}:</span> {item.titulo}
                        </span>
                        <span className="text-xl font-black text-[#f37021]">
                          {isOpened ? '−' : '+'}
                        </span>
                      </button>
                      
                      {isOpened && (
                        <div className="p-5 bg-white border-t border-slate-50 text-slate-600 text-xs md:text-sm leading-relaxed font-medium animate-fade-in">
                          {item.detalle}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bloque: ¿Qué incluye y Qué no? */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Incluye */}
              <div className="bg-emerald-50/40 rounded-3xl p-6 border border-emerald-100/50">
                <h3 className="text-sm font-black text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-lg">✓</span> Lo Que Incluye
                </h3>
                <ul className="space-y-3">
                  {pkg.incluye.map((inc, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-700 font-bold flex items-start gap-2.5">
                      <span className="text-emerald-500 font-black mt-0.5">✓</span> {inc}
                    </li>
                  ))}
                </ul>
              </div>
              {/* No Incluye */}
              <div className="bg-rose-50/40 rounded-3xl p-6 border border-rose-100/50">
                <h3 className="text-sm font-black text-rose-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-lg">✕</span> No Incluye
                </h3>
                <ul className="space-y-3">
                  {pkg.noIncluye.map((noInc, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-700 font-bold flex items-start gap-2.5">
                      <span className="text-rose-400 font-black mt-0.5">✕</span> {noInc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: CAJA FIJA DE RESERVA (1/3 de ancho) */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 relative overflow-hidden">
              
              {/* Badge Flotante de Descuento */}
              <span className="absolute top-4 right-4 bg-[#f37021] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                {pkg.descuento}
              </span>

              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Precio por Persona</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-[#f37021]">S/ {pkg.precio}</span>
                <span className="text-slate-400 text-xs line-through font-bold">S/ {pkg.id === 'p1' ? '450.00' : pkg.id === 'p2' ? '650.00' : '860.00'}</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-1">Impuestos de ingreso incluidos</p>

              <hr className="my-5 border-slate-100" />

              {/* Formulario de Simulación */}
              <div className="space-y-4">
                
                {/* Selector de Alojamiento */}
                <div>
                  <label className="text-[10px] font-black text-[#004a8c] uppercase tracking-widest block mb-2">Opción de Alojamiento</label>
                  <select 
                    value={selectedHotel}
                    onChange={(e) => setSelectedHotel(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-700 focus:outline-hidden focus:border-[#004a8c]"
                  >
                    {pkg.alojamientos.map((hotel, hIdx) => (
                      <option key={hIdx} value={hotel}>{hotel}</option>
                    ))}
                  </select>
                </div>

                {/* Selector de Fecha */}
                <div>
                  <label className="text-[10px] font-black text-[#004a8c] uppercase tracking-widest block mb-2">Fecha de Llegada</label>
                  <input 
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-700 focus:outline-hidden focus:border-[#004a8c]"
                  />
                </div>

                {/* Contadores de Personas */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Adultos */}
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Adultos</span>
                    <div className="flex items-center justify-between mt-2">
                      <button 
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 bg-white rounded-lg border border-slate-200 text-sm font-black text-slate-600 hover:bg-slate-100 transition-colors"
                      >-</button>
                      <span className="text-sm font-black text-slate-800">{adults}</span>
                      <button 
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 bg-white rounded-lg border border-slate-200 text-sm font-black text-slate-600 hover:bg-slate-100 transition-colors"
                      >+</button>
                    </div>
                  </div>

                  {/* Niños */}
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Niños (2-11)</span>
                    <div className="flex items-center justify-between mt-2">
                      <button 
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 bg-white rounded-lg border border-slate-200 text-sm font-black text-slate-600 hover:bg-slate-100 transition-colors"
                      >-</button>
                      <span className="text-sm font-black text-slate-800">{children}</span>
                      <button 
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 bg-white rounded-lg border border-slate-200 text-sm font-black text-slate-600 hover:bg-slate-100 transition-colors"
                      >+</button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Botones de Acción Comercial */}
              <div className="mt-6 space-y-3">
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-[#004a8c] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-[#003566] transition-colors shadow-md block text-center"
                >
                  Reservar Ahora
                </button>
                
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-[#25D366] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Consultar por WhatsApp
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}