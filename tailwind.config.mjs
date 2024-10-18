/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0533C5",        
      },
      transitionDuration: {
        DEFAULT: "300ms"
      }
    },
  },
  plugins: [],
};
