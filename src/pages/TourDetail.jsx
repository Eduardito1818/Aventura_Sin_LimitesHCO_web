import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TourDetail() {
  const { id } = useParams(); // Esto captura el nombre del tour de la URL

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen container mx-auto px-6">
        <h1 className="text-4xl font-bold text-azul-aventura">Detalles del Tour: {id}</h1>
        <p className="mt-4 text-gray-600">Aquí programaremos el itinerario y el botón de reserva.</p>
      </div>
      <Footer />
    </>
  );
}