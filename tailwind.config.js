/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans"],
        nunito: ["Nunito Sans"],
        poppins: ["Poppins"],
      },
      colors: {
        "primary-blue": "#002687",
        "mono-white": "#ffffff",
        "mono-new-white": "#FEFEFE",
        "mono-white-grey": "#F5F5F5",
        "primary-yellow": "#FF9C01",
      },
    },
  },
  plugins: [],
};
