import React, { useState, useEffect } from 'react';

export default function Complaints() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    telefono: '',
    correo: '',
    tipo: 'Reclamo', // Reclamo o Queja
    detalle: '',
    pedido: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí se conectaría con tu servicio de backend o EmailJS para el correo formal
    console.log("Datos del reclamo enviados al correo de la empresa:", formData);
    
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins pb-24">
      
      {/* 🏔️ HERO HEADER CORPORATIVO */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 pt-40 pb-16 px-6 text-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-[#f37021]/10 text-[#f37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#f37021]/20">
            Plataforma de Atención al Consumidor
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4 drop-shadow-xs">
            Libro de Reclamaciones
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed font-semibold">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, nuestra agencia pone a su disposición este canal virtual.
          </p>
        </div>
      </div>

      {/* 🧾 FORMULARIO DE RECLAMACIONES VIRTUAL */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 mt-12 relative z-20">
        
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 bg-[#004a8c]/5 hover:bg-[#004a8c] text-[#004a8c] hover:text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all mb-8 border border-[#004a8c]/10"
        >
          ← Volver
        </button>

        {enviado ? (
          <div className="bg-white rounded-[32px] p-10 shadow-xl border border-slate-100 text-center space-y-4 animate-fade-in">
            <span className="text-4xl block">📩</span>
            <h2 className="text-xl font-black text-[#004a8c] uppercase tracking-tight">¡Reclamo Registrado Exitosamente!</h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium max-w-md mx-auto">
              Se ha enviado una copia detallada de esta hoja de reclamación al correo **{formData.correo}** y a nuestro departamento legal corporativo. Responderemos en un plazo máximo de 15 días hábiles.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-slate-100 space-y-6">
            
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-sm font-black text-[#004a8c] uppercase tracking-wider">Hoja de Reclamación Virtual</h2>
                <span className="text-[10px] text-slate-400 font-bold block mt-0.5">Agencia: Aventura Sin Límites</span>
              </div>
              <span className="bg-amber-500/10 text-amber-600 text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider border border-amber-500/20">
                Respuesta en un plazo máx. de 15 días
              </span>
            </div>

            {/* SECCIÓN 1: DATOS DEL CONSUMIDOR */}
            <div className="space-y-4">
              <span className="text-[10px] font-black text-[#f37021] uppercase tracking-widest block border-l-2 border-[#f37021] pl-2">1. Identificación del Consumidor</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Nombre Completo</label>
                  <input required type="text" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#004a8c]" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">DNI / CE</label>
                  <input required type="text" value={formData.dni} onChange={(e) => setFormData({...formData, dni: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#004a8c]" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Teléfono / Celular</label>
                  <input required type="tel" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#004a8c]" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Correo Electrónico (Para envío de copia)</label>
                  <input required type="email" value={formData.correo} onChange={(e) => setFormData({...formData, correo: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#004a8c]" />
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: DETALLE DEL RECLAMO */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <span className="text-[10px] font-black text-[#f37021] uppercase tracking-widest block border-l-2 border-[#f37021] pl-2">2. Detalle de la Reclamación</span>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Tipo de Incidencia</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer">
                    <input type="radio" name="tipo" value="Reclamo" checked={formData.tipo === 'Reclamo'} onChange={() => setFormData({...formData, tipo: 'Reclamo'})} className="accent-[#004a8c]" />
                    Reclamo <span className="text-[10px] text-slate-400 font-medium">(Disconformidad relacionada a los servicios)</span>
                  </label>
                  <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer">
                    <input type="radio" name="tipo" value="Queja" checked={formData.tipo === 'Queja'} onChange={() => setFormData({...formData, tipo: 'Queja'})} className="accent-[#004a8c]" />
                    Queja <span className="text-[10px] text-slate-400 font-medium">(Malestar o descontento respecto al trato)</span>
                  </label>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Descripción Detallada del Suceso</label>
                <textarea required rows="4" value={formData.detalle} onChange={(e) => setFormData({...formData, detalle: e.target.value})} placeholder="Escriba los hechos detallando el tour o paquete contratado..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#004a8c] resize-none" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Pedido Concreto / Solicitud del Consumidor</label>
                <textarea required rows="2" value={formData.pedido} onChange={(e) => setFormData({...formData, pedido: e.target.value})} placeholder="¿Cuál es la solución o compensación que solicita?" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#004a8c] resize-none" />
              </div>
            </div>

            {/* BOTÓN DE ACCIÓN */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button type="submit" className="bg-[#004a8c] hover:bg-[#003566] text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-colors shadow-md w-full sm:w-auto">
                Enviar Reclamación Formal
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}