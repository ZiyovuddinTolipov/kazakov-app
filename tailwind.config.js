/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('img/hero-pattern.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'info-right':"url('/img/infoBg.svg')"
      }
    },
  },
  plugins: [],
}