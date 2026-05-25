import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PackageDetail() {
  // Capturamos el ID de la URL de forma dinámica
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center font-poppins">
      
      {/* Contenedor estético de prueba */}
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl max-w-md w-full backdrop-blur-md">
        
        {/* Icono de check de éxito */}
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold animate-bounce">
          ✓
        </div>

        <h1 className="text-2xl font-black uppercase tracking-tight text-emerald-400">
          ¡Ruta Conectada!
        </h1>
        
        <p className="text-slate-400 mt-3 text-sm leading-relaxed">
          Estás visualizando el lienzo independiente para los <span className="text-white font-bold">Paquetes Destacados</span>.
        </p>

        {/* Muestra el ID real con el que interactuó el botón */}
        <div className="my-6 p-4 bg-slate-950 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">ID del Paquete Detectado</span>
          <span className="text-3xl font-black text-[#f37021] block mt-1">#{id}</span>
        </div>

        {/* Botón seguro para regresar al Home */}
        <Link 
          to="/" 
          className="w-full bg-[#f37021] text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl hover:bg-orange-600 transition-all block text-center shadow-lg"
        >
          ← Volver al Home Principal
        </Link>
      </div>

    </div>
  );
}