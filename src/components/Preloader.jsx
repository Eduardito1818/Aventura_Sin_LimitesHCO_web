
import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo_png.png';
import Bg1 from '../assets/fondo1.jpeg';
import Bg2 from '../assets/fondo2.jpg';
import Bg3 from '../assets/fondo3.jpeg';

const backgrounds = [Bg1, Bg2, Bg3];

const Preloader = ({ onFinish }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 2000);

    const preloaderTimeout = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 6000);

    return () => {
      clearInterval(bgInterval);
      clearTimeout(preloaderTimeout);
    };
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${opacity === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      <div className="absolute inset-0 bg-[#004a8c]/70 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="h-32 w-auto" />
      </div>
    </div>
  );
};

export default Preloader;