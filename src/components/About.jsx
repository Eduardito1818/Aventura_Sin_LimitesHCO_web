
import imagenEquipo from "../assets/equipo-aventura.jpg.jpeg"; 

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[#0E4D92] uppercase">
            Nosotros
          </h2>
          <div className="w-20 h-1.5 bg-[#F07A24] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen del Equipo */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D89A3D] rounded-2xl"></div>
              <img 
                src={imagenEquipo} // 2. Usamos la variable importada aquí
                alt="Equipo Aventura Sin Límites" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[400px]"
              />
            </div>
          </div>

          {/* Textos de Misión y Elección */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-[#0E4D92] mb-4 uppercase">
                Nuestra Misión
              </h3>
              <p className="text-[#222831] font-inter leading-relaxed">
                Nuestra misión es enriquecer la vida de nuestros viajeros a través de experiencias auténticas en Huánuco, compartiendo la riqueza cultural y natural de nuestra región con calidez y profesionalismo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-[#0E4D92] mb-4 uppercase">
                Por qué elegirnos
              </h3>
              <p className="text-[#222831] font-inter leading-relaxed">
                Contamos con guías locales apasionados y certificados que garantizan tu seguridad y diversión. Nos esforzamos por ofrecer itinerarios únicos que te permitan conectar de verdad con la comunidad y el entorno huanuqueño.
              </p>
            </div>

            {/* Sello de Certificación */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border-l-4 border-[#0E4D92]">
              <div className="text-3xl">🛡️</div>
              <div>
                <h4 className="font-bold text-[#0E4D92]">Certificado</h4>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Guías Oficiales de Turismo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}