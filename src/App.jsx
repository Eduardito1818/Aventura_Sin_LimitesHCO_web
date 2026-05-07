import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TourCard from "./components/TourCard";
import About from "./components/About"; 
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const TOURS_DATA = [
  {
    id: 1,
    nombre: "Huánuco Tradicional",
    precio: 50,
    duracion: "Full Day",
    dificultad: "Fácil",
    rating: 4.8,
    reviews: 45,
    imagen: "/src/assets/huanuco-tradicional.jpg.png" 
  },
  {
    id: 2,
    nombre: "Tingo María Exótico",
    precio: 95,
    duracion: "Full Day",
    dificultad: "Media",
    rating: 4.9,
    reviews: 62,
    imagen: "/src/assets/tingo-maria.jpg.png" 
  },
  {
    id: 3,
    nombre: "Andizónico",
    precio: 65,
    duracion: "Full Day",
    dificultad: "Media",
    rating: 4.7,
    reviews: 38,
    imagen: "/src/assets/andizonico.jpg.png" 
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        <Features />
        
        {/* Sección de Tours */}
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
            <button className="border-2 border-azul-aventura text-azul-aventura px-10 py-3 rounded-full font-bold hover:bg-azul-aventura hover:text-white transition-all uppercase tracking-widest text-sm cursor-pointer">
              Ver todos los tours →
            </button>
          </div>
        </section>

        {/* Nueva Sección: Nosotros */}
        <About />
        <Testimonials />

      </main>
      <Footer />
    </div>
  );
}

export default App;