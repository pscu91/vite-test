/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21BF48",
        mainText: "#000000",
        subText: "#767676",
        accentText: "#EB5757",
        background: "#f2f2f2",
      },
      fontFamily: {},
      backgroundImage: {
        home: "url('/vite-test/BgImage.jpeg')",
      },
    },
    screens: {
      ss: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      xxl: "1536px",
      xxxl: "2000px",
    },
  },
  corePlugins: {
    preflight: true,
  },
};
