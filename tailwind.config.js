/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1536px",
        contentContainer: "1280px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2x1": "1400px",
      },
      colors: {
        mainBg: "#ffffff",
        softBg: "#f0f0f0",
        textColor: "#000000",
        softTextColor: "#626262",
        accentBg: "#582467",
        accentBg2: "#B686C3",
        ahornBg: "#EEE7F0",
      },
      boxShadow: {
        bannerShadow: "0 1px 2px 1px #00000026",
        containerShadow: "0 1px 2px 1px #00000026"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}