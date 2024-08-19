/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Home-section/home-bg.svg')",
        'model-bg': "url('/Home-section/model-bg.png')",
        'star': "url('/Home-section/star-arrow.png')"
      }
    },
  },
  plugins: [],
}

