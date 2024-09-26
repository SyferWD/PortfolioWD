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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neu-blue': '#7DA1FF',
        'neu-white': '#FFF'
      },
      fontFamily: {
        baloo: ['"Baloo Thambi 2"', 'cursive'],
      },
      boxShadow:{
        'custom-neumorphic': '10px 10px 25px #d9dade, -10px -10px 25px #FFFFFF',
        'custom-grey-neu': '3px 3px 6px #b8b9be, -3px -3px 6px #fff',
        'custom-grey-neu-pressed' : '-3px -3px 6px #b8b9be, 6px 6px 6px #fff',
      },
    },
  },
  plugins: [],
};
export default config;
