/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
  
    screens:{
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
      
    },
    extend: {},
    container:{
      center: true,
      padding: '1rem', 
    }
  },
  plugins: [],
  mode: 'jit'
}
