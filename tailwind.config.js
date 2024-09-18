/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#081b29",
        "deep-blue": "#081b29",
        blue: "#005059",
        aqua: "#00E5FF",
        "dark-yellow": "#212100",
        yellow: "#FDCC49",
        lemon: "#FFFF00",
        green: "#081B09",
        lime: "#2ED110",
        "dark-pink": "#210011",
        pink: "#59002E",
        magenta: "#E90076",
        "dark-red": "#200000",
        "dark-orange": "#240F00",
        orange: "#FF4500",
        red: "#d01b1b",
        "dark-grey": "#2E2E2E",
        grey: "#EDEDED",
        white: "#F0F0F0",
      },
      boxShadow: {
        "ladning-aqua": "-30px -30px 20px #00E5FF",
        "neon-yellow": "0 0 5px  #FFFF00, 0px 0px 20px  #FDCC49",
      },

      backgroundImage: {
        "gradient-blue-green": "linear-gradient(90deg, aqua 45%, lime 90%)",
        "gradient-green-yellow":
          "linear-gradient(90deg, lime 45%, #FFFF00 90%)",
      },

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
