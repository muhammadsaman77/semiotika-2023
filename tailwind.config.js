/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-blue": "#002687",
      "mono-white": "#ffffff",
      "mono-new-white": "#FEFEFE",
      "mono-white-grey": "#F5F5F5",
      "primary-yellow": "#FF9C01",
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
