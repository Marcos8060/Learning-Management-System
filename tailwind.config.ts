import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FFCC00',
        secondary: '#000000',
        tertiary: '#CCCCCC',
        blue: "#10142D",
      }
    },
  },
  plugins: [],
};
export default config;
