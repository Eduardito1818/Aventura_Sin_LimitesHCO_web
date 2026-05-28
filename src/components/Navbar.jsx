import { Link } from 'react-router-dom';
import Logo from '../assets/logo_png.png';

export default function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full bg-transparent z-50 px-6 py-4 flex justify-between items-center m-0">
        <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </Link>
      </div>

 {/* Sección Central: Enlaces de navegación en Blanco */}
<div className="flex gap-8 font-poppins font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
  <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
  <Link to="/nosotros" className="hover:text-orange-500 transition-colors">Nosotros</Link>
  <Link to="/resenas" className="hover:text-orange-500 transition-colors">Reseñas</Link>
  <Link to="/#tours" className="hover:text-orange-500 transition-colors">Tours</Link>
  <Link to="/hoteles" className="hover:text-orange-500 transition-colors">Hoteles</Link>
</div>

{/* Sección Derecha: Selector de idioma en Blanco */}
<div className="flex items-center gap-2 text-white font-bold drop-shadow-sm">
  <span className="cursor-pointer hover:text-orange-500">ES</span> /
  <span className="cursor-pointer hover:text-orange-500">EN</span>
</div>
    </nav>
  );
}
