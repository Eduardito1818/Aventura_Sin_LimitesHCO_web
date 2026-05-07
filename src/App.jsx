import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      <main className="pt-16"> {/* El pt-16 es para que el Navbar fijo no tape el Hero */}
        <Hero />
        <Features />
        
        {/* Aquí irán los Tours Destacados después */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-poppins font-bold text-azul-aventura">TOURS DESTACADOS</h2>
          <div className="w-20 h-1 bg-naranja-aventura mx-auto mt-2"></div>
        </section>
      </main>
    </div>
  );
}

export default App;