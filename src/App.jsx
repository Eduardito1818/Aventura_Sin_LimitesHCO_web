import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />
      
      {/* Hero Section Provisional */}
      <main className="pt-32 pb-20 flex flex-col items-center">
        <h1 className="text-6xl font-poppins font-bold text-azul-aventura text-center leading-tight">
          VIVE LA AVENTURA <br /> 
          <span className="text-naranja-aventura text-4xl uppercase tracking-widest">EN HUÁNUCO</span>
        </h1>
        <p className="mt-6 text-gris-carbon text-lg">Explora lo mejor de la tierra del cóndor y el sol.</p>
      </main>
    </div>
  );
}

export default App;