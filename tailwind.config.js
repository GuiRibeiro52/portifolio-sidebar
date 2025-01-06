/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['poppins', 'sans-serif'],
        ibmPlex: ['"IBM Plex Sans"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1286px',
      '2xl': '1536px',
      
    }
  },
  plugins: [],
}