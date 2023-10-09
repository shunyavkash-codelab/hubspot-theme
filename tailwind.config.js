module.exports = {
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      lineClamp: {
        7: "7",
      },
      colors: ({ colors }) => ({
        // custom
        current: "currentColor",
        primary: "#22668D",
        secondary: "#FFCC70",
        tertiary: "#FFFADD",
        dark: "#8ECDDD",
        "light-black": "#333333",
      }),
      fontFamily: {
        title: ["Gabarito", "cursive"],
        body: ["Poppins", "sans-serif"],
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
