import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        3.75: "0.9375rem",
        9.5: "2.375rem",
        70: "17.5rem",
        114.5: "28.625rem",
      },
      lineHeight: {
        subtext: "1.125rem",
      },
      boxShadow: {
        section: "0 2px 10px 0 rgba(22,22,22,0.1)",
      },
      colors: {
        dark: "#161616",
        light: "#FBFBFB",
        subtext: "#7A7A7A",
        main: "#E33A6D",
        separator: "#D1D1D1",
      },
      flexBasis: {
        "51": "51%",
      },
    },
  },
  plugins: [],
};
export default config;
