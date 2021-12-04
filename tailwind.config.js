const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "btn-rec1": "url('/images/btn-bg1.jpg')",
        "btn-rec2": "url('/images/btn-bg2.jpg')",
        "btn-rec3": "url('/images/btn-bg3.jpg')",
        "btn-rec4": "url('/images/btn-bg4.jpg')",
        "btn-rec5": "url('/images/btn-bg5.jpg')",
        "gradient-btn":
          "linear-gradient(180deg, hsla(0,0%,100%,0.3) 0, white 40%)",
      },
    },
    boxShadow: {
      nav: "0 -2px 4px 0 rgba(108, 114, 124, 0.16)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none::-webkit-scrollbar": {
          display: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
