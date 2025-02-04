/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",

  flowbite.content(),
];
export const theme = {
  extend: {
    fontFamily: {
      montserrat: ['"Montserrat"', "sans-serif"], // Add Montserrat font
    },
  },
};
export const plugins = [
  flowbite.plugin(),
];

