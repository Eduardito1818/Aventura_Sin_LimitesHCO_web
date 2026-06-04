import React, { useEffect } from 'react';

export default function Terms() {
  // Forzar scroll arriba para iniciar la lectura desde el principio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-poppins pb-24">
      
      {/* 🏔️ HEADER EN BLANCO CON MARGEN DE DESCOMPRESIÓN NAVBAR (pt-44) */}
      <div className="max-w-4xl mx-auto pt-44 px-6">
        
        {/* Botón de retorno simple */}
        <button 
          onClick={() => window.history.back()}
          className="text-slate-400 hover:text-[#004a8c] text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 mb-6"
        >
          ← Volver
        </button>

        {/* Título Principal */}
        <h1 className="text-2xl md:text-4xl font-black text-[#004a8c] uppercase tracking-tight border-b-2 border-slate-200 pb-4">
          Términos y Condiciones 
        </h1>
        
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-2">
          Última actualización: Junio 2026
        </p>

        {/* 📑 ESPACIO EN BLANCO DOCUMENTAL PARA REDACCIÓN MANUAL */}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-xs border border-slate-100 text-slate-600 text-sm leading-relaxed font-medium space-y-6">
          
          <p className="text-slate-500 italic">
            [Espacio en blanco reservado para la inserción de las cláusulas comerciales de la agencia Aventura Sin Límites, políticas de reembolso, anulaciones por factores climáticos de la región y condiciones de reserva de hoteles.]
          </p>

          {/* Puedes usar esta estructura de ejemplo para tus párrafos futuros */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-[#004a8c] uppercase tracking-wider">1. Objeto del Servicio</h3>
            <p className="text-xs text-slate-500">
              La agencia actúa como intermediaria entre los usuarios y los establecimientos de hospedaje/guías locales descritos en la plataforma...
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}