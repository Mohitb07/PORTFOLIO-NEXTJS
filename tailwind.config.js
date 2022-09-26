/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
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
