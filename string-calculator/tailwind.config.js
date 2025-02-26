/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          "warm-grey": "#EEEFE8",
          "light-gray":"#F3F4F6"
        }
      },
    },
    plugins: [],
  }