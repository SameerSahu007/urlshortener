/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '800': '800px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '430px'},  
      },
  },
  plugins: [],
}

