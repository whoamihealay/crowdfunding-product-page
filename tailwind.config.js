module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/images/image-hero-desktop.jpg')",
        "hero-mobile": "url('/images/image-hero-mobile.jpg')",
      },
      colors: {
        transparent: "transparent",
        "body-gray": "hsl(0, 0%, 48%)",
        "bg-cream": "hsl(230, 100%, 99%)",
        "cyan-active": "hsl(176, 72%, 28%)",
        "cyan-bg": "#3cb4ac",
      },
      screens: {
        ms: { max: "640px" },
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
