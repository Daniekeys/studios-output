module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "studio-grey": "#636c79",
        "studio-red": "#FA5959",
        "studio-dark": "#242A45",
        "studio-green": "#8bb7a3",
        "studio-white": "#f2f2f2",
        "studio-border": "#e6e6e6",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Donegal: ["Donegal One, serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};