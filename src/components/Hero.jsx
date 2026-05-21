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
    <section className="h-screen w-full relative overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/45 z-10 flex items-center justify-center text-white text-center">
            <div className="relative z-20 px-6">
              <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight uppercase">
                {slide.title}
              </h1>
              <p className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores de bolitas */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full bg-white cursor-pointer transition-all duration-300 ${index === currentSlide ? 'scale-150 opacity-100' : 'opacity-50'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
