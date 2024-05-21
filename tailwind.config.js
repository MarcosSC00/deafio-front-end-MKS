/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'sans':['Montserrat'],
    boxShadow: {
      'card-shadow':'0px 2px 8px #00000014'
    }
  },
  plugins: [],
}

