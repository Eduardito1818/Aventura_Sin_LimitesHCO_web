export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      nombre: "Marina",
      comentario: "Una experiencia increíble en Huánuco Tradicional. Los guías son muy amables y conocen muchísima historia.",
      rating: 5,
      foto: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      nombre: "Larra",
      comentario: "Tingo María fue mágico. La organización de la agencia es impecable, puntuales y muy seguros.",
      rating: 5,
      foto: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      nombre: "Andrea",
      comentario: "El tour Andizónico superó mis expectativas. Paisajes hermosos y comida deliciosa. ¡Súper recomendados!",
      rating: 5,
      foto: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section id="reseñas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[#0E4D92] uppercase">
            Lo que dicen nuestros viajeros
          </h2>
          <div className="w-20 h-1.5 bg-[#F07A24] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#0E4D92] hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <img src={review.foto} alt={review.nombre} className="w-14 h-14 rounded-full object-cover border-2 border-[#D89A3D]" />
                <div>
                  <h4 className="font-bold text-[#0E4D92]">{review.nombre}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic font-inter leading-relaxed">
                "{review.comentario}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}