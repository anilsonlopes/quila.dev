import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["pages/**/*.vue"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
  theme: {
    container: {
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Space Grotesk", ...defaultTheme.fontFamily.serif],
      mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
    },
  },
};
