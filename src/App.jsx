import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TourCard from "./components/TourCard";

const TOURS_DATA = [
  {
    id: 1,
    nombre: "Cultura Millenaria",
    precio: 49,
    duracion: "3 días",
    dificultad: "Fácil",
    rating: 4.8,
    reviews: 120,
    imagen: "https://images.unsplash.com/photo-1587547131116-a0655a526190?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    nombre: "Tingo María",
    precio: 89,
    duracion: "Full Day",
    dificultad: "Media",
    rating: 4.9,
    reviews: 85,
    imagen: "https://images.unsplash.com/photo-1596435680190-67f78119859f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    nombre: "Huallaga",
    precio: 55,
    duracion: "2 días",
    dificultad: "Fácil",
    rating: 4.7,
    reviews: 64,
    imagen: "https://images.unsplash.com/photo-1528164344705-4754268799af?q=80&w=1000&auto=format&fit=crop"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        
        <section className="py-20 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins font-bold text-azul-aventura uppercase">
              Tours Destacados
            </h2>
            <div className="w-20 h-1.5 bg-naranja-aventura mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Grid de Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS_DATA.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="border-2 border-azul-aventura text-azul-aventura px-10 py-3 rounded-full font-bold hover:bg-azul-aventura hover:text-white transition-all uppercase tracking-widest text-sm">
              Ver todos los tours →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;