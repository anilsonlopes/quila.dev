import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["pages/**/*.vue"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        racing: ["Racing Sans One", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
