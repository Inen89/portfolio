/** @type {import('tailwindcss').Config} */

export default {
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
        grey: "#616161",
        white: "#EDEDED",
      },
      boxShadow: {
        "ladning-aqua": "-30px -30px 20px #00E5FF",
        "neon-yellow": "0 0 5px  #FFFF00, 0px 0px 20px  #FDCC49",
        "neon-pink": "0 0 20px  #E90076, 0px 0px 50px  #59002E",
        "neon-pink-sm": "0 0 5px  #E90076, 0px 0px 20px  #59002E",
      },
      animation: {
        "pulse-once": "pulse 3s linear 1",
      },

      backgroundImage: {
        "gradient-deepblue-green":
          "linear-gradient(160deg, #081b29 60%, #081B09 100%)",
        "gradient-aqua-lime": "linear-gradient(90deg, aqua 45%, lime 90%)",
        "gradient-green-yellow":
          "linear-gradient(160deg, #081B09 60%, #212100 100%)",
        "gradient-lime-lemon": "linear-gradient(90deg, lime 45%, #FFFF00 90%)",
        "gradient-yellow-pink":
          "linear-gradient(160deg, #212100 60%, #210011 100%)",
        "gradient-lemon-magenta":
          "linear-gradient(90deg, #FFFF00 45%, #E90076 90%)",
        "gradient-pink-grey":
          "linear-gradient(160deg, #210011 60%, #2E2E2E 100%)",
        "gradient-magenta-white":
          "linear-gradient(90deg, #E90076 45%, #F0F0F0 90%)",
        "gradient-grey-white":
          "linear-gradient(90deg, #616161 45%, #F0F0F0 90%)",
      },

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
