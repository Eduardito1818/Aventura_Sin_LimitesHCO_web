import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TOURS_FULL_INFO = {
  "1": {
    nombre: "Huánuco Tradicional",
    precio: "50",
    inicio: "11:00 AM",
    retorno: "6:30 PM",
    itinerario: [
      { actividad: "Puente Calicanto" },
      { actividad: "Iglesia San Sebastián" },
      { actividad: "Monumento del León de Huánuco" },
      { actividad: "Zona Arqueológica Monumental de Kotosh" },
      { actividad: "Punto Magnético" },
      { actividad: "Museo de Kotosh" },
      { actividad: "Almuerzo Típico" },
      { actividad: "Hermita de las Pampas" },
      { actividad: "Hacienda Cachigaga - Degustación de Shacta" },
      { actividad: "Casa de la Perricholi" },
      { actividad: "Degustación de Prestiños Huanuqueños" }
    ],
    queLlevar: ["Bloqueador solar", "Cámara fotográfica", "Ropa ligera", "Lentes de sol", "Agua"],
    incluye: ["Movilidad", "Guiado", "Ticket de ingreso", "Fotos"],
    noIncluye: ["Alimentación", "Gastos personales"]
  },
  "2": {
    nombre: "Tingo María Exótico",
    precio: "95",
    inicio: "5:30 AM",
    retorno: "8:30 PM",
    itinerario: [
      { actividad: "Túnel de Carpish (Cambio Geográfico Sierra - Selva)" },
      { actividad: "Fotografías Artísticas" },
      { actividad: "Desayuno Típico Especialidad en Truchas" },
      { actividad: "Catarata Honolulu" },
      { actividad: "Mirador de la Cruz" },
      { actividad: "Almuerzo Típico de la Selva" },
      { actividad: "Aguas Sulfurosas (Opcional)" },
      { actividad: "Cueva de las Lechuzas (Parque Nacional de Tingo María)" },
      { actividad: "Degustación de Tragos Exóticos" },
      { actividad: "Visita a la Fábrica de Chocolate" },
      { actividad: "Paseo en Bote (Opcional)" }
    ],
    queLlevar: ["Repelente", "Ropa de baño", "Toalla", "Zapatillas", "Capa para lluvia"],
    incluye: ["Movilidad", "Guiado", "Ticket de ingreso", "Fotos"],
    noIncluye: ["Alimentación", "Gastos personales"]
  },
  "3": {
    nombre: "Andizónico",
    precio: "65",
    inicio: "9:30 AM",
    retorno: "5:30 PM",
    itinerario: [
      { actividad: "Iglesia de Santa María del Valle" },
      { actividad: "Churubamba" },
      { actividad: "Museo de Momias de Papahuasi" },
      { actividad: "Plaza Central de Acomayo" },
      { actividad: "Túnel de Carpish (Cambio Geográfico Sierra - Selva)" },
      { actividad: "Almuerzo Especialidad en Truchas" },
      { actividad: "Pesca de Truchas" },
      { actividad: "Fotos Artísticas en el Mirador de Carpish" },
      { actividad: "Vivero de Hortensias y demás plantas ornamentales" }
    ],
    queLlevar: ["Casaca cortavientos", "Sombrero", "Cámara", "Agua mineral"],
    incluye: ["Movilidad", "Guiado", "Ticket de ingreso", "Fotos"],
    noIncluye: ["Alimentación", "Gastos personales"]
  }
};

export default function TourDetail() {
  const { id } = useParams();
  const tour = TOURS_FULL_INFO[id];

  if (!tour) return <div className="pt-32 text-center font-bold italic">Tour no encontrado</div>;

  return (
    <div className="bg-[#f8fafc] font-inter">
      <Navbar />
      
      {/* Hero Section Refinado */}
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
          
          {/* COLUMNA IZQUIERDA: Contenido Principal */}
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

            {/* Listado de Itinerario con Interactividad */}
            <div className="space-y-4 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {tour.itinerario.map((item, index) => (
                <div key={index} className="relative pl-14 group">
                  {/* Indicador de número */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center font-black text-[#004a8c] group-hover:border-[#f37021] group-hover:text-[#f37021] transition-all duration-300 z-10 shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-50 shadow-sm group-hover:shadow-md group-hover:translate-x-1 transition-all duration-300">
                    <p className="text-slate-700 font-bold text-base md:text-lg">{item.actividad}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist de Equipaje Rediseñado */}
            <div className="mt-20 bg-gradient-to-br from-white to-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-xl">
              <h3 className="text-xl font-black text-[#004a8c] mb-8 flex items-center gap-3">
                 <span className="text-2xl">🎒</span> ¿QUÉ PREPARAR EN TU MOCHILA?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tour.queLlevar.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                       ✨
                    </div>
                    <span className="text-slate-600 text-xs font-black uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Reserva */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-white p-10 rounded-[50px] shadow-[0_20px_50px_rgba(0,74,140,0.1)] border border-slate-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#f37021]"></div>
              
              <h3 className="text-[#004a8c] font-black text-2xl mb-10 tracking-tighter italic uppercase">Ticket de Reserva</h3>
              
              <div className="space-y-10">
                <section>
                  <h4 className="text-green-600 font-black mb-5 flex items-center gap-2 text-xs uppercase tracking-widest">
                    ✔️ Incluye en el Tour
                  </h4>
                  <ul className="space-y-4">
                    {tour.incluye.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-500 font-bold text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="pb-10 border-b border-slate-100">
                  <h4 className="text-red-400 font-black mb-5 flex items-center gap-2 text-xs uppercase tracking-widest">
                    ❌ No Incluye
                  </h4>
                  <ul className="space-y-4">
                    {tour.noIncluye.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-400 font-medium text-sm">
                        <span className="w-2 h-2 bg-slate-200 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="text-center">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Precio por persona</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-6xl font-black text-[#004a8c] tracking-tighter">S/ {tour.precio}</span>
                    
                  </div>
                  
                  <a 
                    href={`https://wa.me/519XXXXXXXX?text=¡Hola! Me interesa reservar el tour: ${tour.nombre}`}
                    target="_blank"
                    className="mt-10 w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-6 rounded-3xl font-black hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-green-100 uppercase italic"
                  >
                    Reserva Aquí 
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.734 11.734 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}