/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        bols: "4px",
      },
      width: {
        bols: "4px",
      },
      boxShadow: {
        "4xl": "0 6px currentColor, 0 -6px currentColor",
        bols: "0 8px currentColor, 0 -8px currentColor",
        hoverandfocus: "0 0 0 3px #fea",
        boxmobile: "0 1px 2px #00000a33 ",
      },
      translate: {
        mobile: "-10px",
      },
      transformOrigin: {
        initial: "initial",
      },
      colors: {
        footer: "#764701",
        ee1: "#eee",
        "bg-footer": "#fb1",
        "bg-span": "rgba(0,0,0,.3)",
      },
      backgroundImage: {
        auth: "url('/src/public/login.jpg')",
      },
      gridArea: {
        custom: "1 / 1 / span 2 / 3",
      },
      rotate: {
        "(-90)": "-90deg",
      },
      gridTemplateColumns: {
        twocolumns: "1fr auto;",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-grid-area"),
  ],
};
