/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-blue": "#002687",
      "mono-white": "#ffffff",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans"],
        nunito: ["Nunito Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
