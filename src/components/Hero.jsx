import React, { useState, useEffect } from 'react';
import selvaImg from '../assets/fondo1.jpeg';   // 👈 FONDO 1 (.jpeg)
import sierraImg from '../assets/fondo2.jpg';    // 👈 FONDO 2 (.jpg)
import kotoshImg from '../assets/fondo3.jpeg';   // 👈 FONDO 3 (.jpeg)

const slides = [
  {
    image: selvaImg,
    title: "EXPLORA LA SELVA PERUANA",
    description: "Aventúrate en la biodiversidad amazónica y vive experiencias inolvidables.",
  },
  {
    image: sierraImg,
    title: "DESCUBRE LOS ANDES MÍSTICOS",
    description: "Conecta con la sabiduría ancestral y paisajes impresionantes de la sierra.",
  },
  {
    image: kotoshImg,
    title: "VIAJA AL PASADO EN KOTOSH",
    description: "Explora la civilización más antigua de América en este sitio arqueológico.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4500);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    // CONTENEDOR PRINCIPAL: Ocupa toda la pantalla real ignorando márgenes del layout
    <section className="relative h-screen w-full overflow-hidden bg-slate-900 m-0 p-0 block">
      
      {/* 1. CAPA DE IMÁGENES DE FONDO EN MOVIMIENTO (Efecto Ken Burns) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* 2. CAPA OSCURA UNIFICADA: Evita saltos y cubre el 100% hasta arriba de la pantalla */}
      <div className="absolute inset-0 bg-black/35 z-10" />
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-15 pointer-events-none" />

      {/* 3. CONTENEDOR DE TEXTOS FLOTANTES CENTRALES */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-7xl font-poppins font-black leading-tight uppercase tracking-tight max-w-5xl drop-shadow-xl transition-all duration-700">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto drop-shadow-md transition-all duration-700">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* 4. INDICADORES DE BOLITAS INFERIORES */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full bg-white cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'scale-150 opacity-100 bg-orange-500' : 'opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}