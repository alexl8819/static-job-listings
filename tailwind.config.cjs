/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        'mobile-header': 'url("./src/assets/images/bg-header-mobile.svg")',
        'desktop-header': 'url("./src/assets/images/bg-header-desktop.svg")'
      },
      colors: {
        'light-greyish-cyan': 'hsl(180, 52%, 96%)',
        'light-greyish-cyan-2': 'hsl(180, 31%, 95%)',
        'dark-greyish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-greyish-cyan': 'hsl(180, 14%, 20%)',
        'desaturated-dark-cyan': 'hsl(180, 29%, 50%)'
      }
    },
  },
  plugins: [],
}
