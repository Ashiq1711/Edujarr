/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(101.61deg, #083F9B 0%, #7F56D9 93.39%)',
        'custom': 'linear-gradient(to bottom, #083F9B 0%, #7F56D9 83.39%)',
        'custom2': 'linear-gradient(to top, #D9ECFF 0%, #F0F3FF 83.39%)',
      },
      colors: {
        primary: '#2AAA94',
        secondary: '#1B2336',
      },
      fontFamily: {
        'font1': ['Saira', 'sans-serif'],
        'font2': ['Rowdies', 'cursive'],
      }
    },
  },
  plugins: [],
}
