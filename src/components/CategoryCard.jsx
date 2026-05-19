import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ pkg }) => {
  return (
    <div className={`bg-white rounded-[32px] shadow-lg border flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative ${pkg.categoria === 'recomendado' ? 'border-[#f37021]/40 ring-2 ring-[#f37021]/10' : 'border-slate-100'}`}>
      
      {/* 1. BADGE DE "MÁS VENDIDO" (Solo para el Recomendado) - Estilo Mockup */}
      {pkg.categoria === 'recomendado' && (
        <span className="absolute -top-3 right-8 bg-[#f37021] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md z-20">
          🔥 Más Vendido
        </span>
      )}

      <div className="p-8 flex flex-col flex-grow">
        
        {/* 2. CABECERA DE TEXTO (Sin Imagen) - Estilo Mockup */}
        <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] mb-1">Categoría:</p>
        <h3 className={`text-2xl font-black uppercase mb-3 tracking-tight ${pkg.categoria === 'basico' ? 'text-green-600' : pkg.categoria === 'recomendado' ? 'text-[#f37021]' : 'text-blue-600'}`}>
          {pkg.nombre}
        </h3>
        
        {/* Descripción corta */}
        <p className="text-slate-500 text-sm mb-6 font-medium normal-case leading-relaxed">
          {pkg.descripcion}
        </p>

        {/* 3. LISTA DE PUNTOS COLORIDA - Estilo Mockup */}
        <ul className="space-y-3 mb-8 flex-grow">
          {pkg.puntos.map((punto, index) => (
            <li key={index} className="text-slate-700 text-xs font-bold flex items-center gap-2.5 uppercase tracking-tight">
              <span className={`text-lg ${pkg.categoria === 'basico' ? 'text-green-500' : pkg.categoria === 'recomendado' ? 'text-[#f37021]' : 'text-blue-500'}`}>•</span> 
              {punto}
            </li>
          ))}
        </ul>
        
        {/* 4. FOOTER CON PRECIO Y BOTÓN - Estilo Mockup */}
        <div className="pt-6 border-t border-slate-100 mt-auto text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Precios Desde</p>
          <p className={`text-4xl font-black mb-6 tracking-tighter ${pkg.categoria === 'basico' ? 'text-green-700' : pkg.categoria === 'recomendado' ? 'text-[#f37021]' : 'text-blue-700'}`}>
            S/ {pkg.precio}
          </p>
          
          <Link
            to={pkg.ruta}
            className={`block w-full text-center py-4 px-4 rounded-xl font-bold transition-all duration-300 text-xs uppercase tracking-wider shadow-md ${pkg.categoria === 'recomendado' ? 'bg-[#f37021] text-white hover:bg-orange-600' : 'bg-[#004a8c] text-white hover:bg-[#003566]'}`}
          >
            {pkg.nombre === "Paquete Básico" ? "Ver Catálogo Básico" : pkg.nombre === "Paquete Recomendado" ? "Ver Catálogo Recomendado" : "Ver Catálogo VIP"} →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;