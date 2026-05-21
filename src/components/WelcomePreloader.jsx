
import React, { useState, useEffect } from "react";
import LogoAventura from "../assets/logo_png.png";

const WelcomePreloader = ({ onComplete }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimeout = setTimeout(() => {
      setIsLeaving(true);
    }, 1200);

    const unmountTimeout = setTimeout(() => {
      onComplete();
    }, 1950);

    return () => {
      clearTimeout(leaveTimeout);
      clearTimeout(unmountTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#f8fafc] transition-all duration-750 ease-in-out ${isLeaving ? 'opacity-0 -translate-y-full' : ''}`}>
      <img src={LogoAventura} alt="Aventura Sin Límites" className="w-64" />
    </div>
  );
};

export default WelcomePreloader;
