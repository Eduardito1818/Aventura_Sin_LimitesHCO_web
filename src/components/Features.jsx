export default function Features() {
  const items = [
    { icon: "🛡️", title: "Mejores precios", desc: "Garantizados" },
    { icon: "🏔️", title: "Guías expertos", desc: "Locales" },
    { icon: "✅", title: "Tours certificados", desc: "Y seguros" },
    { icon: "📞", title: "Atención 24/7", desc: "Por WhatsApp" },
  ];

  return (
    <div className="bg-white py-10 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h4 className="font-bold text-azul-aventura leading-tight">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}