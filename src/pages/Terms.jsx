import React, { useEffect } from 'react';

export default function Terms() {
  // Forzar scroll arriba al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-poppins pb-24">
      
      {/* 🏔️ HERO HEADER PREMIUM (Alineado con el diseño de Hoteles y Tours) */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 pt-40 pb-16 px-6 text-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-[#f37021]/10 text-[#f37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#f37021]/20">
            Marco Legal Corporativo
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4 drop-shadow-xs">
            Términos y Condiciones
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed font-semibold">
            Por favor, lea atentamente las cláusulas contractuales que rigen los servicios turísticos, reservas y excursiones de nuestra agencia.
          </p>
        </div>
      </div>

      {/* 📑 CUERPO DOCUMENTAL CON LA PALETA DE AVENTURA SIN LÍMITES */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-12 relative z-20">
        
        {/* Botón de regreso estilizado */}
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 bg-[#004a8c]/5 hover:bg-[#004a8c] text-[#004a8c] hover:text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all mb-8 border border-[#004a8c]/10"
        >
          ← Volver al Panel
        </button>

        {/* Tarjeta de Contenido Principal */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-slate-100 text-slate-600 text-xs md:text-sm leading-relaxed font-medium space-y-8">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Documento Oficial</span>
            <span className="bg-[#f37021]/10 text-[#f37021] text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
              Vigente / 2026
            </span>
          </div>

          {/* 1. Introducción */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">1.</span> Introducción
            </h3>
            <p className="text-slate-500 font-medium pl-6">
              Bienvenido a **Aventura Sin Límites**. Al reservar o utilizar cualquiera de nuestros servicios, itinerarios de aventura o traslados tradicionales, usted acepta de manera tácita y obligatoria los siguientes términos y condiciones de uso. Le recomendamos leer este documento detenidamente antes de proceder con el pago de su reserva.
            </p>
          </section>

          {/* 2. Reservas y Pagos */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">2.</span> Reservas y Pagos
            </h3>
            <div className="text-slate-500 font-medium pl-6 space-y-2">
              <p>• Para garantizar de forma definitiva su cupo en los circuitos, es mandatorio realizar un pago parcial o total según las especificaciones indicadas en el formulario dinámico de cada paquete.</p>
              <p>• Aceptamos transacciones directas mediante transferencias bancarias, billeteras digitales y pasarelas integradas seguras detalladas en nuestra interfaz de usuario.</p>
              <p>• Toda confirmación de itinerario oficial se despachará de manera automatizada a través de correo electrónico o mediante enlace estructurado de mensajería una vez validado el abono en nuestros sistemas contables.</p>
            </div>
          </section>

          {/* 3. Política de Cancelación */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">3.</span> Política de Cancelación y Reembolsos
            </h3>
            <div className="text-slate-500 font-medium pl-6 space-y-2">
              <p>• **Anulaciones con más de 48 horas de anticipación:** El cliente será acreedor a un reembolso íntegro de los montos transferidos.</p>
              <p>• **Anulaciones entre 48 y 24 horas previas al viaje:** Se procesará un reembolso parcial equivalente al 50% del valor total adjudicado.</p>
              <p>• **Anulaciones con menos de 24 horas o inasistencia (*No-Show*):** No se otorgará derecho a devoluciones económicas de ningún tipo.</p>
              <p>• **Cancelaciones por Fuerza Mayor:** En casos excepcionales provocados por factores climáticos severos o disposiciones gubernamentales de tránsito, se gestionará una reprogramación prioritaria del itinerario o, en su defecto, la devolución total del saldo.</p>
            </div>
          </section>

          {/* 4. Modificaciones en el Itinerario */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">4.</span> Modificaciones en el Itinerario
            </h3>
            <p className="text-slate-500 font-medium pl-6">
              Nuestra organización se reserva el derecho exclusivo de alterar el orden de las excursiones por causas logísticas, de seguridad vial o eventos climáticos imprevistos, velando en toda circunstancia por la integridad y seguridad física de los pasajeros y buscando alternativas de similar valor comercial para su recreación.
            </p>
          </section>

          {/* 5. Responsabilidades del Cliente */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">5.</span> Responsabilidades del Cliente
            </h3>
            <div className="text-slate-500 font-medium pl-6 space-y-2">
              <p>• Es deber de los pasajeros presentarse en el punto de concentración exacto a la hora estipulada. El retraso o incumplimiento de los horarios puede derivar en la pérdida definitiva del paquete sin reembolso.</p>
              <p>• El usuario es responsable de portar sus documentos de identidad en regla, indumentaria adecuada para el ecosistema geográfico visitado y acatar obligatoriamente las normas dictadas por el guía certificado.</p>
            </div>
          </section>

          {/* 6. Responsabilidad de la Agencia */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">6.</span> Responsabilidad de la Empresa
            </h3>
            <p className="text-slate-500 font-medium pl-6">
              Nos comprometemos a brindar un servicio que cumpla con los más altos estándares de calidad. No obstante, no asumimos responsabilidad civil directa por accidentes imprevistos provocados por negligencia del propio usuario, pérdida de artículos personales desatendidos o situaciones de orden natural fuera del control humano.
            </p>
          </section>

          {/* 7. Reclamaciones y Plazos */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">7.</span> Reclamaciones y Plazos
            </h3>
            <p className="text-slate-500 font-medium pl-6">
              Los desembolsos financieros aprobados bajo los términos de la cláusula tercera se procesarán en un plazo límite de hasta 7 días hábiles. Toda inconformidad debe presentarse formalmente por escrito en un periodo no mayor a 48 horas tras finalizar el servicio, empleando los canales digitales autorizados.
            </p>
          </section>

          {/* 8. Legislación y Jurisdicción */}
          <section className="space-y-2">
            <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#f37021]">8.</span> Legislación Aplicable
            </h3>
            <p className="text-slate-500 font-medium pl-6">
              Las presentes cláusulas y condiciones contractuales de uso se rigen estrictamente bajo el marco de la legislación de la República del Perú. Ante cualquier desacuerdo irreconciliable, las partes renuncian a sus fueros locales y se someten ante los tribunales correspondientes del Perú.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
}