import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["pages/**/*.vue"],
  plugins: [require("@tailwindcss/typography")],
};
