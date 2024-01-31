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
        30: "7.5rem",
        9.5: "2.375rem",
      },
      lineHeight: {
        subtext: "1.125rem",
      },
      boxShadow: {
        header: "0 2px 10px 0 rgba(22,22,22,0.1)",
      },
      colors: {
        dark: "#161616",
        subtext: "#7A7A7A",
        main: "#E33A6D",
        separator: "#D1D1D1",
      },
    },
  },
  plugins: [],
};
export default config;
