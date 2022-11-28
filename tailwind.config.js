/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'truck': 'url("../public/Background/landing-page-truck.jpg")',
        'truck2': 'url("../public/Background/landing-page-truck-mobile.jpg")',
      }, 
    },
  },
  plugins: [],
}
