import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sub: "var(--sub)",
        primary: "var(--primary-color)",
        "black-color": "var(--black-color)",
        secondary: "var(--secondary-color)",
        "sub-30": "var(--sub-30)",
      },
      backgroundImage: {
        "on-code": "var(--on-code)",
        "on-code-70": "var(--on-code-70)",
      },
      height: {
        "screen-navbar": "calc(100vh - 64px)!important",
      },
    },
  },
  plugins: [],
};
export default config;
