import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ pkg }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
      
      {/* Badge de Duración Flotante */}
      <span className="absolute top-4 left-4 bg-[#f37021] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md z-10">
        PAQUETE: {pkg.duracion}
      </span>
      
      {/* Imagen */}
      <div className="h-48 overflow-hidden bg-slate-100">
        <img src={pkg.imagen} alt={pkg.nombre} className="w-full h-full object-cover" />
      </div>
      
      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-black text-[#004a8c] uppercase mb-4 tracking-tight leading-tight min-h-[3.5rem] line-clamp-2">
          {pkg.nombre}
        </h3>
        
        {/* Lista de Puntos Personalizada sin los círculos negros de HTML */}
        <ul className="space-y-2 mb-6 flex-grow">
          {pkg.puntos.map((punto, index) => (
            <li key={index} className="text-slate-600 text-xs font-bold flex items-center gap-2 uppercase tracking-tight">
              <span className="text-[#f37021] text-sm">•</span> {punto}
            </li>
          ))}
        </ul>
        
        {/* Sección de Precio Refinada */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Precios Desde</p>
          <p className="text-2xl font-black text-[#f37021] mb-4">S/ {pkg.precio}</p>
          
          <Link
            to={`/tour/${pkg.id}`}
            className="block w-full text-center bg-[#004a8c] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#003566] transition-colors duration-300 text-xs uppercase tracking-wider shadow-sm"
          >
            VER PAQUETE COMPLETO 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;