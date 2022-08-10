/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./public/**/*.html",
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
          '60%': { transform: 'translate(0px, -80px);', opacity: 0},
          '80%': { transform: 'translate(0px, 20px);', opacity: 0},
          '100%': { transform: 'translate(0px, 0px);'}
        }
      }
    },
  }
}
