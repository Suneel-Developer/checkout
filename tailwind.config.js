/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': "#f7f7f8",
        'gray-200': "#b1b1b4",
        'gray-300': "#6c6d75",
        'gray-400': "#e2e2e4",
        'input': "#8d8e96",
        'secondary': "#4d4e56",
      }
    },
  },
  plugins: [],
};
