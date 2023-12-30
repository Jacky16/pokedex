/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono Variable", "sans-serif"],
      },
      colors: {
        primary:"#FD3836",
        secondary: "#EDD53E",
      },
    },
  },
  plugins: [],
};
