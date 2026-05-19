export const TOURS_FULL_INFO = {
  "1": {
    nombre: "Huánuco Tradicional",
    precio: "50",
    inicio: "11:00 AM",
    retorno: "6:30 PM",
    itinerario: [
      { actividad: "Puente Calicanto" },
      { actividad: "Iglesia San Sebastián" },
      { actividad: "Monumento del León de Huánuco" },
      { actividad: "Zona Arqueológica Monumental de Kotosh" },
      { actividad: "Punto Magnético" },
      { actividad: "Museo de Kotosh" },
      { actividad: "Almuerzo Típico" },
      { actividad: "Hermita de las Pampas" },
      { actividad: "Hacienda Cachigaga - Degustación de Shacta" },
      { actividad: "Casa de la Perricholi" },
      { actividad: "Degustación de Prestiños Huanuqueños" }
    ],
    queLlevar: ["Bloqueador solar", "Cámara fotográfica", "Ropa ligera", "Lentes de sol", "Agua"],
    incluye: ["Movilidad", "Guiado", "Ticket de ingreso", "Fotos"],
    noIncluye: ["Alimentación", "Gastos personales"]
  },
  "2": {
    nombre: "Tingo María Exótico",
    precio: "95",
    inicio: "5:30 AM",
    retorno: "8:30 PM",
    itinerario: [
      { actividad: "Túnel de Carpish (Sierra - Selva)" },
      { actividad: "Fotografías Artísticas" },
      { actividad: "Desayuno Típico de Truchas" },
      { actividad: "Catarata Honolulu" },
      { actividad: "Mirador de la Cruz" },
      { actividad: "Almuerzo Típico de la Selva" },
      { actividad: "Aguas Sulfurosas (Opcional)" },
      { actividad: "Cueva de las Lechuzas" },
      { actividad: "Degustación de Tragos Exóticos" },
      { actividad: "Fábrica de Chocolate" },
      { actividad: "Paseo en Bote (Opcional)" }
    ],
    queLlevar: ["Repelente", "Ropa de baño", "Toalla", "Zapatillas", "Capa para lluvia"],
    incluye: ["Movilidad", "Guiado", "Ticket de ingreso", "Fotos"],
    noIncluye: ["Alimentación", "Gastos personales"]
  },
  "3": {
    nombre: "Andizónico",
    precio: "65",
    inicio: "9:30 AM",
    retorno: "5:30 PM",
    itinerario: [
      { actividad: "Iglesia de Santa María del Valle" },
      { actividad: "Churubamba" },
      { actividad: "Museo de Momias de Papahuasi" },
      { actividad: "Plaza Central de Acomayo" },
      { actividad: "Túnel de Carpish" },
      { actividad: "Almuerzo Especialidad en Truchas" },
      { actividad: "Pesca de Truchas" },
      { actividad: "Mirador de Carpish" },
      { actividad: "Vivero de Hortensias" }
    ],
    queLlevar: ["Casaca cortavientos", "Sombrero", "Cámara", "Agua mineral"],
    incluye: ["Movilidad", "Guiado", "Ticket de ingreso", "Fotos"],
    noIncluye: ["Alimentación", "Gastos personales"]
  }
};

export const PACKAGES_DATA = [
  {
    id: "p1",
    nombre: "Huánuco Completo: Aventura y Tradición",
    precio: "605.00",
    duracion: "5 Días / 4 Noches",
    rating: 4.9,
    reviews: 120,
    imagen: "/src/assets/huanuco-tradicional.jpg.png",
    puntos: ["Kotosh", "Tingo María", "Shacta", "Tomayquichua", "+ All Meals", "Hotel"]
  },
  {
    id: "p2",
    nombre: "Selva y Aventura",
    precio: "515.00",
    duracion: "4 Días / 3 Noches",
    rating: 4.7,
    reviews: 95,
    imagen: "/src/assets/selva-aventura.jpg.png",
    puntos: ["Catarata de la Leona", "Cueva de las Lechuzas", "Paseo en bote", "Full Day", "Hotel"]
  },
  {
    id: "p3",
    nombre: "Sierra Mágica",
    precio: "780.00",
    duracion: "6 Días / 5 Noches",
    rating: 4.8,
    reviews: 150,
    imagen: "/src/assets/sierra-magica.jpg.png",
    puntos: ["Laguna de Carpa", "Bosque de Rocas", "Comunidades Nativas", "Trekking", "+ All Meals", "Hotel"]
  }
];

export const CATEGORIES_DATA = [
  {
    id: "cat-basico",
    categoria: "basico",
    nombre: "Paquete Básico",
    descripcion: "La mejor opción para escapadas rápidas y económicas.",
    precio: "150.00",
    duracion: "Full Days / Tours Cortos",
    imagen: "/src/assets/huanuco-tradicional.jpg.png",
    puntos: ["Movilidad Compartida", "Guía Local Certificado", "Entradas a Atractivos", "Fotos del Recuerdo"],
    ruta: "/paquetes/basico"
  },
  {
    id: "cat-recomendado",
    categoria: "recomendado",
    nombre: "Paquete Recomendado",
    descripcion: "Nuestra opción más vendida y completa.",
    precio: "515.00",
    duracion: "3 a 5 Días de Aventura",
    imagen: "/src/assets/selva-aventura.jpg.png",
    puntos: ["Hoteles Seleccionados", "Almuerzos Típicos Incluidos", "Full Days Completos", "Soporte 24/7"],
    ruta: "/paquetes/recomendado"
  },
  {
    id: "cat-todo-incluido",
    categoria: "todo-incluido",
    nombre: "Paquete Todo Incluido",
    descripcion: "La experiencia VIP de lujo sin preocupaciones.",
    precio: "890.00",
    duracion: "Experiencias de Alta Gama",
    imagen: "/src/assets/sierra-magica.jpg.png",
    puntos: ["Tours Privados Exclusivos", "Hoteles de 4 Estrellas", "Todas las Comidas", "Guía VIP"],
    ruta: "/paquetes/todo-incluido"
  }
];