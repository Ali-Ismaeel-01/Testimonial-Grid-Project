/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      lineClamp : {
        9: "9",
        11: "11",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
