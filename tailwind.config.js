/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#081b29",
        aqua: "#00E5FF",
        blue: "#005059",
        red: "#FF5733",
        green: "#234519",
        lime: "#39FF14",
        yellow: "#FDCC49",
        lemon: "#FFFF00",
        grey: "#EDEDED",
        "deep-blue": "#081b29",
      },
      boxShadow: {
        aqua: "-30px -30px 20px  aqua",
      },

      backgroundImage: {
        "gradient-blue-green":
          "linear-gradient(90deg, #00E5FF 45%, #39FF14 90%)",
        "gradient-green-yellow":
          "linear-gradient(90deg, #39FF14 45%, #FFFF00 90%)",
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
