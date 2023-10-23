/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png,jpg,svg}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
      },
      width: {
        container: "500px",
        485: "485px",
        450: "450px",
        "hero-image": "600px",
        title: "200px",
      },
      height: {
        "hero-image": "400px",
        container: "200vh",
      },
      backgroundColor: {
        "primary-500": "#A103D3",
        "primary-700": "#6B028D",
        "survace-200": "#FAFAFA",
        "survece-500": "#FDF9F0",
      },
      borderColor: {
        "primary-500": "#A103D3",
        "primary-700": "#6B028D",
      },
      borderWidth: {
        2: "2px",
      },
    },
  },
  plugins: [],
};
