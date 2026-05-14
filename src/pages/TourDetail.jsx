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
      
      {/* Encabezado Simple y Limpio */}
      <div className="bg-[#004a8c] pt-28 pb-12 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            {tour.nombre}
          </h1>
          <p className="text-white/70 mt-2 font-medium tracking-widest uppercase text-xs">
            Aventura Sin Límites
          </p>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LADO IZQUIERDO: Itinerario y Checklist */}
          <div className="lg:w-2/3">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#004a8c] flex items-center gap-3">
                   <span className="w-8 h-1 bg-[#f37021]"></span> ITINERARIO
                </h2>
                <p className="text-slate-400 text-xs mt-1 ml-11 uppercase font-bold">
                    Inicio: {tour.inicio} | Retorno: {tour.retorno}
                </p>
            </div>

            {/* Lista de Itinerario Estilizada */}
            <div className="space-y-4 ml-4 border-l-2 border-slate-100 pl-8 relative">
              {tour.itinerario.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Punto naranja de la línea de tiempo */}
                  <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#f37021] rounded-full group-hover:bg-[#f37021] transition-colors"></div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
                    <p className="text-slate-700 font-bold text-sm md:text-base">{item.actividad}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Qué Llevar */}
            <div className="mt-16 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#004a8c] mb-6 flex items-center gap-2">
                 🎒 ¿Qué llevar para esta aventura?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tour.queLlevar.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase bg-slate-50 p-3 rounded-lg">
                    <span className="text-[#f37021]">✦</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Card de Precio (Copia fiel de la imagen) */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
              {/* Etiqueta Oferta Naranja */}
              <div className="absolute top-0 right-0 bg-[#f37021] text-white px-8 py-2 rounded-bl-2xl font-bold text-sm">
                OFERTA
              </div>

              <h3 className="text-[#004a8c] font-bold text-xl mb-8">DETALLES DEL SERVICIO</h3>
              
              <div className="space-y-8">
                {/* Lo que incluimos */}
                <div>
                  <h4 className="text-green-600 font-bold mb-4 flex items-center gap-2 italic text-sm">
                    ✓ Lo que incluimos
                  </h4>
                  <ul className="space-y-3 text-slate-500 text-sm font-semibold">
                    {tour.incluye.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* No incluye */}
                <div className="pb-8 border-b border-slate-100">
                  <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2 italic text-sm">
                    ✕ No incluye
                  </h4>
                  <ul className="space-y-3 text-slate-500 text-sm font-semibold">
                    {tour.noIncluye.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Precio y Botón */}
                <div className="pt-2">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Inversión Total</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-5xl font-black text-[#004a8c]">S/ {tour.precio}</span>
                  </div>
                  <p className="text-slate-400 text-[10px] mt-1 font-bold italic">* Precio por persona</p>
                  
                  <a 
                    href={`https://wa.me/519XXXXXXXX?text=Hola Aventura Sin Límites, quiero reservar el tour: ${tour.nombre}`}
                    target="_blank"
                    className="mt-8 w-full bg-[#22c55e] text-white py-5 rounded-[20px] font-bold hover:bg-[#1bad51] transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-green-100 uppercase tracking-wider"
                  >
                    Reservar por WhatsApp →
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