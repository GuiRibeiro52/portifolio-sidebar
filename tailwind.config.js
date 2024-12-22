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
  },
  plugins: [],
}