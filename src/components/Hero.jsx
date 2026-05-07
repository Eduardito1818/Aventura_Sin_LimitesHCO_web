export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      {/* Imagen de fondo con overlay oscuro para que se lea el texto */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight">
          VIVE LA AVENTURA <br />
          <span className="text-[--color-naranja-aventura]">EN HUÁNUCO</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Descubre lugares increíbles, culturas milenarias y experiencias que te cambiarán para siempre.
        </p>

        {/* Buscador (Estilo el de tu boceto) */}
        <div className="mt-10 bg-white p-2 rounded-xl md:rounded-full shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 px-6 py-2 flex items-center gap-3 border-r border-gray-200">
            <span className="text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="¿A dónde quieres ir?" 
              className="w-full outline-none text-gris-carbon"
            />
          </div>
          <div className="flex-1 px-6 py-2 flex items-center gap-3">
            <span className="text-gray-400">📅</span>
            <input type="text" placeholder="Fecha" className="w-full outline-none text-gris-carbon" />
          </div>
          <button className="w-full md:w-auto bg-[--color-naranja-aventura] text-white px-10 py-4 rounded-xl md:rounded-full font-bold hover:bg-[--color-azul-aventura] transition-all cursor-pointer">
            BUSCAR
          </button>
        </div>
      </div>
    </section>
  );
}