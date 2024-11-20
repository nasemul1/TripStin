/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['Noto Serif Bengali', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        merienda: ['Merienda', 'cursive']
      },
      backgroundImage: {
        'hero-img': "url('./src/images/components-img/hero.webp')",
        'blog': "url('./src/images/category-section/blog.webp')",
        'destination': "url('./src/images/category-section/destination.webp')",
      },
      colors: {
        quillBg: "#f9f9f9", // Example color
      },
    },
  },
  plugins: [],
}