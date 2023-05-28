/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "footer-clr" : "#111827",
      "white": "#fff",
      "black": "#151515",
      "sub-title": "#D99904",
      "grey": "#F3F3F3",
      "btn-grey": "#E8E8E8",
      "iris": "#5D5FEF"
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.5rem',
      widest: '1rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}