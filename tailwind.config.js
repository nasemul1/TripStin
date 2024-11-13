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
        'strip': "url('./src/images/category-section/strip.jpg')",
        'side': "url('./src/images/side.webp')",
        'chittagong': "url('./src/images/background/cox.jpg')",
        'sylhet': "url('./src/images/background/jaflong.jpg')",
        'khulna': "url('./src/images/background/sundarban.jpg')",
        'sunamganj': "url('./src/images/background/sunamganj.webp')"
      }
    },
  },
  plugins: [],
}