import { COLORS, FONT_FAMILY } from "./src/styles";
/** @type {import('tailwindcss').Config} */
const config = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: FONT_FAMILY,
    },
  },
  plugins: [],
};

module.exports = config;
