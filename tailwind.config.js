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
        view: "url('/src/public/visualizacao.svg')",
        viewBlack: "url('/src/public/visualizacao-black.svg')",
      },
      gridArea: {
        custom: "1 / 1 / span 2 / 3",
      },
      gridTemplateRows: {
        row: " auto 1fr auto",
        img: "1 / 4",
      },
      maxHeight: {
        "max-sm": "max-height: calc(100vh - 4rem);",
      },
      rotate: {
        "(-90)": "-90deg",
      },
      gridTemplateColumns: {
        gridtemplatecolumns: "36rem 20rem",
        twocolumns: "1fr auto;",
        gridarea: "1/1",
        modalsm: "grid-template-columns: minmax(20rem, 40rem);",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-grid-area"),
  ],
};
