/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-aventura': '#0E4D92',
        'azul-profundo': '#08366A',
        'naranja-aventura': '#F07A24',
        'camello-safari': '#D89A3D',
        'verde-laguna': '#3BB7A5',
        'gris-carbon': '#222831',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}