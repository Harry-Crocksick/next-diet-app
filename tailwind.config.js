/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img-1":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), transparent), url(/assets/header-img-1.png)",
        "hero-img-2":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), transparent), url(/assets/healthy-juice.png)",
        "about-hero-img-1": "url(/assets/hero-image-2.png)",
        "about-hero-img-2":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), transparent), url(/assets/about-hero-2.png)",
        "contact-hero-img-1": "url(/assets/contact-hero-1.png)",
        "product-hero-img-1": "url(/assets/product-hero-img-1.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
