const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 3px rgba(0, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '6rem',
          '2xl': '7rem',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "astro-gray" : "#A3A5A8",
        "king-red" : "#FF674C",
        "gray": "#646464",
        "red-light": "#f9b0a6",
        "black": "#231f20",
        "cafe": "#dfcea226",
        "gray-light": "#f1f1f2",
        "gray-opacity": "#a3a5a826",
        "green": "#5ca39a",
        "cream-light": "#dfcea226",
        "cream-hard": "#c7aa5e26",
        "cream-medium": "#faf8f1",
        "red": "#f20000",
        "greenWhatsapp": "#00D95F"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h1, .h1': {
          fontSize: "calc(34px + (78 - 34) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        'h2, .h2': {
          fontSize: "calc(32px + (64 - 32) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        'h3, .h3': {
          fontSize: "calc(24px + (48 - 24) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.1
        },
        'h4, .h4': {
          fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        'h5, .h5': {
          fontSize: "calc(18px + (24 - 18) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        '.parrafo': {
          fontFamily: ['var(--font-arial)'],
          fontSize: "calc(13px + (16 - 13) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.small': {
          fontFamily: ['var(--font-arial)'],
          fontSize: "calc(12px + (13 - 12) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        '.tags': {
          fontSize: "calc(9px + (9 - 9) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        '.font-menu': {
          fontFamily: ['var(--font-arial)'],
          fontSize: "calc(12px + (13 - 12) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2,
          letterSpacing: 1.8
        },
        '.font-btn': {
          fontFamily: ['var(--font-arial)'],
          fontSize: "calc(12px + (14 - 12) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2,
          letterSpacing: 2.8
        },
        '.font-footer': {
          fontFamily: ['var(--font-arial)'],
          fontSize: "calc(12px + (12 - 12) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2,
          letterSpacing: 2.4
        },
      })
    })
  ],
};
