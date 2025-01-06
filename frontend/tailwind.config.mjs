/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          light: '#ADE8F4',
          DEFAULT: '#0077B6',
          dark: '#03045E',
        },
        sand: '#FFD166',
        coral: '#FF6F61',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
