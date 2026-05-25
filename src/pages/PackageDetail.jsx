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
    <div className="min-h-screen bg-slate-50 font-poppins pb-16">
      
      {/* 📍 CABECERA TEMPORAL DE CONTROL - Confirma que los datos fluyen */}
      <div className="pt-32 px-6 max-w-4xl mx-auto text-center">
        <span className="bg-[#f37021]/10 text-[#f37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#f37021]/20">
          Lienzo Conectado Exitosamente (ID: {id})
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-[#004a8c] uppercase mt-4 tracking-tight">
          {pkg.nombre}
        </h1>
        <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
          {pkg.descripcion}
        </p>
      </div>

      {/* 🚀 EN EL SIGUIENTE PASO PEGAREMOS AQUÍ EL HERO Y LA COLUMNA DE RESERVAS */}
      

    </div>
  );
}