module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
