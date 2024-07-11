/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bc: "#5142FC",
        bc2: "#14141F",
        para: "#343434",
      },
      fontFamily: {
        Plus: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
