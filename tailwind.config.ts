import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["pages/**/*.vue"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    container: {
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
};
