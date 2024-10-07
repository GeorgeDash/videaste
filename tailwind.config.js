/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "xxl": "1200px",
        "xxxl": "1440px"
      },
      fontFamily: {
        "sans": "'DM Sans'"
      },
      transitionProperty: {
        "height": "height",
        "width": "width"
      }
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
}