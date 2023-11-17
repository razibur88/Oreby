/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        Container: "1320px",
      },
      backgroundImage: {
        banner: "url('./src/assets/banner.png')",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
