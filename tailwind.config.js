const { colors: defaultColors } = require('tailwindcss/defaultTheme');
const colors = {
    ...defaultColors,
    ...{
        "goma-peach": {
            "1": "#e99883",
            "2": "#eedbdc",
            "3": "#694b40",
            "btn": "#785e51"
        }
    },
}
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh",
        "fit-content": "fit-content"
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "95v": "95vw",
        "100v": "100vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
