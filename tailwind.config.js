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
      }
    },
  },
  plugins: [],
}