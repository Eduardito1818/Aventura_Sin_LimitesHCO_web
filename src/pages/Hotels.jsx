import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 🏨 DATOS LOCALES INYECTADOS DIRECTAMENTE PARA DISEÑO INMEDIATO
const LOCAL_HOTELS = [
  // 🔹 CATEGORÍA: ECONÓMICO
  {
    id: "h-titos",
    nombre: "Hotel Titos",
    categoria: "basico",
    servicios: ["Wifi", "TV Cable", "Baño propio", "Cama de 2 plazas"],
    imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "180", "3D/2N": "300", "4D/3N": "400", "5D/4N": "500" }
  },
  {
    id: "h-sosa",
    nombre: "Hotel El Sosa",
    categoria: "basico",
    servicios: ["Wifi", "TV Cable", "Baño propio", "Cama de 2 plazas"],
    imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "190", "3D/2N": "305", "4D/3N": "410", "5D/4N": "520" }
  },
  {
    id: "h-mar-edu",
    nombre: "Hotel Mar Edu",
    categoria: "basico",
    servicios: ["Wifi", "TV Cable", "Baño propio", "Cama de 2 plazas", "Agua Caliente"],
    imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "200", "3D/2N": "315", "4D/3N": "420", "5D/4N": "530" }
  },

  // 🔹 CATEGORÍA: RECOMENDADO
  {
    id: "h-nilda-rosario",
    nombre: "Hotel Nilda del Rosario",
    categoria: "recomendado",
    servicios: ["Wifi", "TV Cable", "Baño propio", "Cama de 2 plazas", "Piscina", "Desayuno"],
    imagen: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "215", "3D/2N": "345", "4D/3N": "455", "5D/4N": "555" }
  },
  {
    id: "h-suit-express",
    nombre: "Hotel Suit Express",
    categoria: "recomendado",
    servicios: ["Wifi", "TV Cable", "Baño propio", "Cama de 2 plazas", "Agua caliente", "Desayuno"],
    imagen: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "225", "3D/2N": "355", "4D/3N": "475", "5D/4N": "605" }
  },
  {
    id: "h-huanuco-pampa",
    nombre: "Hotel Huánuco Pampa",
    categoria: "recomendado",
    servicios: ["Wifi", "TV Smart", "Frigobar", "Baño propio", "Cama de 2 plazas", "Agua Caliente"],
    imagen: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "235", "3D/2N": "365", "4D/3N": "495", "5D/4N": "635" }
  },

  // 🔹 CATEGORÍA: PREMIUM / VIP
  {
    id: "h-real",
    nombre: "Real Hotel",
    categoria: "todo-incluido",
    servicios: ["Wifi", "TV Cable", "Agua caliente", "Room service", "Cochera", "Restobar", "Baño propio", "Desayuno"],
    imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "250", "3D/2N": "430", "4D/3N": "575", "5D/4N": "740" }
  },
  {
    id: "h-grima",
    nombre: "Hotel Grima",
    categoria: "todo-incluido",
    servicios: ["Wifi", "TV", "Agua caliente", "Desayuno", "Baño propio", "Frigobar", "Cochera"],
    imagen: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "280", "3D/2N": "480", "4D/3N": "665", "5D/4N": "860" }
  },
  {
    id: "h-grand-hotel",
    nombre: "Grand Hotel",
    categoria: "todo-incluido",
    servicios: ["Wifi", "Piscina", "Cochera", "Gimnasio", "Desayuno"],
    imagen: "https://images.unsplash.com/photo-1571896349842-32c89424de2d?q=80&w=600&auto=format&fit=crop",
    precios: { "2D/1N": "310", "3D/2N": "540", "4D/3N": "755", "5D/4N": "980" }
  }
];

export default function Hotels() {
  const [filter, setFilter] = useState('todos');

  // Forzar scroll arriba al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lógica de filtrado utilizando la variable local
  const filteredHotels = filter === 'todos' 
    ? LOCAL_HOTELS 
    : LOCAL_HOTELS.filter(hotel => hotel.categoria === filter);

  return (
    <div className="min-h-screen bg-slate-50 font-poppins pb-24">
      
      {/* 🏔️ HERO HEADER CORPORATIVO */}
      <div className="relative bg-gradient-to-br from-[#004a8c] via-[#003566] to-slate-950 pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-[#f37021]/10 text-[#f37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#f37021]/20">
            Hospedajes Aliados
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4 drop-shadow-sm">
            Hoteles con los que trabajamos
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed font-medium">
            Establecimientos seleccionados minuciosamente bajo estrictos estándares de confort, higiene y ubicación estratégica para tu viaje.
          </p>
        </div>
      </div>

      {/* 🎛️ FILTROS INTERACTIVOS POR CATEGORÍA */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-7 relative z-20 flex justify-center">
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-100 flex flex-wrap gap-1 items-center justify-center">
          <button
            onClick={() => setFilter('todos')}
            className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              filter === 'todos' ? 'bg-[#004a8c] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('basico')}
            className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              filter === 'basico' ? 'bg-[#004a8c] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            Económico
          </button>
          <button
            onClick={() => setFilter('recomendado')}
            className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              filter === 'recomendado' ? 'bg-[#004a8c] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            Recomendado
          </button>
          <button
            onClick={() => setFilter('todo-incluido')}
            className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              filter === 'todo-incluido' ? 'bg-[#004a8c] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            Premium / VIP
          </button>
        </div>
      </div>

      {/* 🗂️ CATÁLOGO EN GRID MULTICOLUMNA */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 transition-all flex flex-col group animate-fade-in"
            >
              {/* Imagen de Habitación/Fachada */}
              <div className="h-52 w-full overflow-hidden relative bg-slate-100">
                <img 
                  src={hotel.imagen} 
                  alt={hotel.nombre} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Badge de Nivel */}
                <span className={`absolute top-4 left-4 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest text-white shadow-xs ${
                  hotel.categoria === 'todo-incluido' ? 'bg-amber-500' : hotel.categoria === 'recomendado' ? 'bg-[#004a8c]' : 'bg-slate-600'
                }`}>
                  {hotel.categoria === 'todo-incluido' ? 'VIP' : hotel.categoria === 'recomendado' ? 'Recomendado' : 'Económico'}
                </span>
              </div>

              {/* Cuerpo del Detalle */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-base font-black text-[#004a8c] uppercase tracking-tight">
                    {hotel.nombre}
                  </h3>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mt-1">📍 Aliado Regional</span>
                </div>

                {/* Comodidades Listadas */}
                <div className="space-y-2">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Servicios del Hotel:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {hotel.servicios.map((serv, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="bg-slate-50 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-100/60"
                      >
                        • {serv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resumen de Tarifas por Estancia */}
                <div className="pt-3 mt-auto border-t border-slate-100">
                  <span className="text-[9px] font-black text-[#004a8c] uppercase tracking-widest block mb-2">Tabla de Precios (Paquetes):</span>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-slate-50/60 p-1.5 rounded-lg border border-slate-100">
                      <span className="text-[9px] font-bold text-slate-400 block">3D / 2N</span>
                      <span className="text-xs font-black text-slate-700">S/ {hotel.precios["3D/2N"]}</span>
                    </div>
                    <div className="bg-slate-50/60 p-1.5 rounded-lg border border-slate-100">
                      <span className="text-[9px] font-bold text-slate-400 block">4D / 3N</span>
                      <span className="text-xs font-black text-slate-700">S/ {hotel.precios["4D/3N"]}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}