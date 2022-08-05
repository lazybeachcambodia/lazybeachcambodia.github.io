/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#832124',
        transparent: 'transparent',
        black: '#000',
        white: '#fff'
      },
      animation: {
        menuText: 'menuText .7s ease-in-out 1',
      },
      keyframes: {
        menuText: {
          '0%': { transform: 'translate(0px, 0px);'},
          '40%': { transform: 'translate(0px, -100px);', opacity: 0},
          '60%': { transform: 'translate(0px, 100px);'},
          '100%': { transform: 'translate(0px, 0px);'}
        }
      }
    },
  },
  plugins: [],
}
