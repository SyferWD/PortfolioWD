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
        'neu-white': '#FFF',
        'dm-white': '#E0E0E0',
        'dm-yellow' : '#FFD700',
        'dm-sec-dark': '#1E1E1E',
      },
      fontFamily: {
        baloo: ['"Baloo Thambi 2"', 'cursive'],
      },
      boxShadow:{
        'custom-grey-neu': '3px 3px 6px #b8b9be, -3px -3px 6px #fff',
        'custom-grey-neu-pressed' : '-3px -3px 6px #b8b9be, 6px 6px 6px #fff',
        'custom-grey-neu-dark': '5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 255, 255, 0.1)', // Dark shadow
        'custom-grey-neu-dark-pressed': 'inset 5px 5px 10px rgba(0, 0, 0, 0.7), inset -5px -5px 10px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
