/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #FFFFFF",
        soft: "6px 6px 12px #b8b9be, -6px -6px 12px #ffffff",
        light: "3px 3px 6px #b8b9be, -3px -3px 6px #ffffff",
      },
    },
  },
  plugins: [],
};
