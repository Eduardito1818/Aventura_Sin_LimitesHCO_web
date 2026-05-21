import { Link } from 'react-router-dom';
import Logo from '../assets/logo_png.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </Link>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex gap-8 font-medium text-gray-700">
        <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
        <Link to="/nosotros" className="hover:text-orange-500 transition-colors">Nosotros</Link>
        <Link to="/resenas" className="hover:text-orange-500 transition-colors">Reseñas</Link>
        <Link to="/#tours" className="hover:text-orange-500 transition-colors">Tours</Link>
      </div>

      {/* Right Section: Book Now Button and Language Selector */}
      <div className="flex items-center gap-4">
        <button className="bg-[#f37021] text-white font-bold px-5 py-2.5 rounded-xl uppercase tracking-wider hover:bg-orange-600 transition-colors">
          RESERVAR AHORA
        </button>
        <div className="flex items-center gap-2 text-gray-700 font-bold">
          <span className="cursor-pointer hover:text-orange-500">ES</span> /
          <span className="cursor-pointer hover:text-orange-500">EN</span>
        </div>
      </div>
    </nav>
  );
}
