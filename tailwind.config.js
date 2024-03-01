/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      colors: {
        primary: "#11c5dd",
        secondary: "#01173c",
        body: "#7d8f9e"
      },
      fontFamily: {
        Fjalla: ['Fjalla One', 'sans-serif'],
        heebo:  ['Heebo', 'sans-serif'],
      
      
        
      },
      backgroundImage: {
        
      },
    },
  },
  plugins: [],
};
