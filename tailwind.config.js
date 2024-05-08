/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        // website colors
        darkgrayblue: "hsl(217, 19%, 35%)",
        darkblue: "hsl(214, 17%, 51%)",
        grayblue: "hsl(212, 23%, 69%)",
        lightgrayblue: "hsl(210, 46%, 95%)",
      },
      gridTemplateRows: {
        //homepage layout
        layout: "1fr 1rem",
      },
    },
  },
  plugins: [],
};
