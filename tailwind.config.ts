import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      inset: {
        '4.5p': '4.5%', // custom class for 4.5%
      },
      fontFamily: {
        kalam: ["Kalam"]
      },
      backgroundColor: {
        "c-nevy-blue": "rgb(244 253 255)"
      }
    },
  },
  plugins: [
    // require('tailwindcss-clip-path')
  ],
};
export default config;
