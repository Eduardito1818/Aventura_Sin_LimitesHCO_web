export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all border border-gray-100">
      {/* Imagen con Badge */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={tour.imagen} 
          alt={tour.nombre} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-0 bg-[--color-naranja-aventura] text-white px-4 py-1 rounded-r-lg font-bold shadow-md">
          <span className="text-[10px] block uppercase leading-none">Desde</span>
          S/ {tour.precio}
        </div>
        <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-red-500 hover:bg-white transition-colors">
          ❤
        </button>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-xl font-poppins font-bold text-azul-aventura uppercase tracking-tight">
          {tour.nombre}
        </h3>
        
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 font-medium">
          <span>🕒 {tour.duracion}</span>
          <span>📊 {tour.dificultad}</span>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-bold text-gris-carbon">{tour.rating}</span>
            <span className="text-gray-400 text-xs">({tour.reviews})</span>
          </div>
          
          <button className="bg-azul-aventura text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-azul-profundo transition-colors uppercase">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}