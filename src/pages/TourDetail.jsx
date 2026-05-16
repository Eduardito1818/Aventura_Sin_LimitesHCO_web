import { useParams } from 'react-router-dom';
import { useState } from 'react'; // Paso 1: Importamos useState para controlar el formulario
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TOURS_FULL_INFO } from '../data/toursData'; 

export default function TourDetail() {
  const { id } = useParams();
  const tour = TOURS_FULL_INFO[id];

  // Estados para controlar si el formulario está abierto y los datos del cliente
  const [isOpen, setIsOpen] = useState(false);
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaViaje, setFechaViaje] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState('1');

  if (!tour) return <div className="pt-32 text-center font-bold italic">Tour no encontrado</div>;

  // Función mágica que procesa los datos y abre WhatsApp
  const handleReservaWhatsApp = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Tu número de la agencia Aventura Sin Límites (reemplaza por el tuyo real)
    const numeroAgencia = "51xxxxxxxxx"; 
    
    // Redactamos el mensaje automático estructurado profesionalmente
    const mensaje = `¡Hola Aventura Sin Límites! 👋%0A%0AMe interesa realizar una reserva:%0A📌 *Tour:* ${tour.nombre}%0A👤 *Nombre:* ${nombreCliente}%0A📅 *Fecha:* ${fechaViaje}%0A👥 *Personas:* ${cantidadPersonas} viajeros.%0A%0A¿Me confirman disponibilidad y métodos de pago? 😊`;
    
    // Abrimos WhatsApp en una pestaña nueva
    window.open(`https://wa.me/${numeroAgencia}?text=${mensaje}`, '_blank');
    
    // Cerramos el modal limpianzo los campos
    setIsOpen(false);
    setNombreCliente('');
    setFechaViaje('');
    setCantidadPersonas('1');
  };

  return (
    <div className="bg-[#f8fafc] font-inter relative">
      <Navbar />
      
      {/* Encabezado */}
      <div className="bg-[#004a8c] pt-32 pb-16 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            {tour.nombre}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-white/30"></span>
            <p className="text-[#f37021] font-black tracking-widest uppercase text-sm">
              Aventura Sin Límites
            </p>
            <span className="h-px w-8 bg-white/30"></span>
          </div>
      </div>

      <main className="container mx-auto px-4 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* COLUMNA IZQUIERDA: Itinerario */}
          <div className="lg:w-2/3">
            <div className="mb-10">
                <h2 className="text-3xl font-black text-[#004a8c] flex items-center gap-4 mb-2">
                   <span className="w-2 h-10 bg-[#f37021] rounded-full"></span> 
                   ITINERARIO DEL VIAJE
                </h2>
                <div className="flex gap-4 ml-6">
                  <span className="bg-blue-50 text-[#004a8c] px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-blue-100">
                    🕒 Inicio: {tour.inicio}
                  </span>
                  <span className="bg-orange-50 text-[#f37021] px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-orange-100">
                    🕒 Retorno: {tour.retorno}
                  </span>
                </div>
            </div>

            <div className="space-y-4 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {tour.itinerario.map((item, index) => (
                <div key={index} className="relative pl-14 group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center font-black text-[#004a8c] group-hover:border-[#f37021] group-hover:text-[#f37021] transition-all duration-300 z-10 shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-50 shadow-sm group-hover:shadow-md group-hover:translate-x-1 transition-all duration-300">
                    <p className="text-slate-700 font-bold text-base md:text-lg">{item.actividad}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist Mochila */}
            <div className="mt-20 bg-gradient-to-br from-white to-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-xl">
              <h3 className="text-xl font-black text-[#004a8c] mb-8 flex items-center gap-3">
                 <span className="text-2xl">🎒</span> ¿QUÉ PREPARAR EN TU MOCHILA?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tour.queLlevar.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">✨</div>
                    <span className="text-slate-600 text-xs font-black uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Botón que abre el formulario */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-white p-10 rounded-[50px] shadow-[0_20px_50px_rgba(0,74,140,0.1)] border border-slate-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#f37021]"></div>
              <h3 className="text-[#004a8c] font-black text-2xl mb-10 tracking-tighter italic uppercase">Ticket de Reserva</h3>
              
              <div className="space-y-10">
                <section>
                  <h4 className="text-green-600 font-black mb-5 flex items-center gap-2 text-xs uppercase tracking-widest">✔️ Incluye en el Tour</h4>
                  <ul className="space-y-4">
                    {tour.incluye.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-500 font-bold text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="pb-10 border-b border-slate-100">
                  <h4 className="text-red-400 font-black mb-5 flex items-center gap-2 text-xs uppercase tracking-widest">❌ No Incluye</h4>
                  <ul className="space-y-4">
                    {tour.noIncluye.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-400 font-medium text-sm">
                        <span className="w-2 h-2 bg-slate-200 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="text-center">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Precio Final</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-6xl font-black text-[#004a8c] tracking-tighter">S/ {tour.precio}</span>
                  </div>
                  <p className="text-slate-400 text-[10px] mt-1 font-bold italic">* Precio por persona</p>
                  
                  {/* MODIFICACIÓN AQUÍ: Ahora cambia el estado a true para abrir el modal */}
                  <button 
                    onClick={() => setIsOpen(true)}
                    className="mt-10 w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-6 rounded-3xl font-black hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-green-100 uppercase italic cursor-pointer"
                  >
                    Reserva Aquí →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ================= COMPONENTE MODAL (EL FORMULARIO FLOTANTE) ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] w-full max-w-md p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* Botón X para cerrar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 font-bold text-xl cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-xl font-black text-[#004a8c] mb-2 uppercase tracking-tight">Datos de Reserva</h3>
            <p className="text-xs text-slate-400 font-medium mb-6">Completa estos pasos rápidos antes de ir a WhatsApp.</p>

            <form onSubmit={handleReservaWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">¿Cuál es tu nombre?</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: Juan Pérez"
                  value={nombreCliente}
                  onChange={(e) => setNombreCliente(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none focus:border-[#f37021] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">¿Para qué fecha programas tu viaje?</label>
                <input 
                  type="date" 
                  required
                  value={fechaViaje}
                  onChange={(e) => setFechaViaje(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none focus:border-[#f37021] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">¿Cuántas personas viajan contigo?</label>
                <select 
                  value={cantidadPersonas}
                  onChange={(e) => setCantidadPersonas(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none focus:border-[#f37021] text-sm"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5+">5 a más personas</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-4 rounded-2xl font-black uppercase tracking-wider shadow-lg shadow-green-100 hover:scale-[1.01] transition-transform text-sm cursor-pointer"
              >
                Confirmar en WhatsApp 📱
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}