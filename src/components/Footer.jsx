export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E4D92] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Logo y Eslogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <span className="text-[#0E4D92] font-black text-xl">A</span>
              </div>
              <span className="font-poppins font-bold text-xl tracking-tighter uppercase">
                Aventura <span className="text-[#F07A24]">Sin Límites</span>
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Expertos en turismo de aventura y rutas tradicionales en la región de Huánuco. Vive experiencias auténticas con guías certificados.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#F07A24] inline-block">Navegación</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><a href="#" className="hover:text-[#F07A24] transition-colors">Inicio</a></li>
              <li><a href="#tours" className="hover:text-[#F07A24] transition-colors">Tours Destacados</a></li>
              <li><a href="#nosotros" className="hover:text-[#F07A24] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-[#F07A24] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#F07A24] inline-block">Contáctanos</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/519XXXXXXXXX" // Reemplaza con tu número real
                target="_blank"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold transition-all w-fit"
              >
                <span>WhatsApp Directo</span>
              </a>
              <div className="flex gap-4 pt-2">
                {/* Iconos simulados (puedes usar Lucide-React o FontAwesome) */}
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F07A24] transition-all">FB</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F07A24] transition-all">IG</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F07A24] transition-all">TK</a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Divisoria y Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-xs">
          <p>© {currentYear} Aventura Sin Límites - Huánuco, Perú. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}