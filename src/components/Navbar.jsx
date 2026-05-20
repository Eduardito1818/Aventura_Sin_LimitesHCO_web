import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-azul-aventura rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="font-poppins font-bold text-azul-aventura text-xl hidden md:block">
            Aventura <span className="text-naranja-aventura text-sm block -mt-1 uppercase tracking-widest">Sin Límites</span>
          </span>
        </Link>
      </div>

      {/* Menú Desktop */}
      <div className="hidden md:flex gap-8 font-medium text-gris-carbon">
        <Link to="/" className="hover:text-azul-aventura transition-colors">Inicio</Link>
        <a href="#tours" className="hover:text-azul-aventura transition-colors">Tours</a>
        <Link to="/nosotros" className="hover:text-azul-aventura transition-colors">Nosotros</Link>
        <Link to="/resenas" className="hover:text-azul-aventura transition-colors">Reseñas</Link>
        <a href="#" className="hover:text-azul-aventura transition-colors">Contacto</a>
      </div>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/519XXXXXXXX" // Reemplaza con tu número de WhatsApp real
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-sm"
      >
        WHATSAPP
      </a>
    </nav>
  );
}