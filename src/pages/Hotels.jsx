import React from 'react';
import { Link } from 'react-router-dom';

export default function Hoteles() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-8">
        Hoteles con los que trabajamos
      </h1>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Regresar al Home
      </Link>
    </div>
  );
}
