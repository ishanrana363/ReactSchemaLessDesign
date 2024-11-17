/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Add Flowbite plugin
  ],
};
