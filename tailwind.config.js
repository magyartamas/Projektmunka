/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/rose-petals.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    
  },
  plugins: [],
  plugins: [require('@tailwindcss/forms'),]
}