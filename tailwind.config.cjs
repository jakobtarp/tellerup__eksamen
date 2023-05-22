/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-discover": "url('imgs/tintindiscover.jpg')",
      },
    },
  },
  plugins: [],
};
