// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "nuxt-gtag",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  devtools: { enabled: true },
  gtag: {
    id: "G-V8GX23DB8H",
  },
  pinia: {
    autoImports: ["defineStore"],
  },
});