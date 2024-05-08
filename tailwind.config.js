/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      // Update color names
      primary: colors.purple, // Replace colors.purple with colors.violet
      secondary: colors.fuchsia, // Replace colors.pink with colors.fuchsia
      // Add renamed color names
      sky: colors.sky, // New color name
      stone: colors.stone, // New color name
      neutral: colors.neutral, // New color name
      gray: colors.grayray, // New color name
      slate: colors.slate, // New color name
    },
  },
  plugins: [],
};
