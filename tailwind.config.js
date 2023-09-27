module.exports = {
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: ({ colors }) => ({
        // custom
        current: "currentColor",
        primary: "#FEF3DF",
        secondary: "#E0F1F1",
        tertiary: "#E6EBE4",
        dark: "#2E3349",
        light: {
          DEFAULT: "#CDCDCD",
          200: "#E9E9E9",
          300: "#EAEAEA",
          400: "#BCBCBC",
          500: "#f2f2f2",
          600: "#D9D9D9",
          700: "#F1F1F1",
        },
        red: {
          DEFAULT: "#FF0078",
          error: "#FF0000",
        },
        "light-gray": "#A8A8A8",
        "amber-light": "#FBF3E8",
        "slate-gray": "#f8f8f8",
      }),
      fontFamily: {
        title: ["Bebas Neue"],
        title2: ["Bebas"],
        body: ["Grotesque MT Std"],
        body2: ["Roboto"],
      },
      padding: {
        4.5: "1.15rem",
      },
      letterSpacing: {
        space: "0.03em",
      },

      screens: {
        sm: "576px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
