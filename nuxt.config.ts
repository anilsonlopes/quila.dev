// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'quila',
    }
  },
  modules: [
    "@nuxt/content",
    "nuxt-gtag",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  devtools: { enabled: true },
  gtag: {
    id: "G-V8GX23DB8H",
  },
  googleFonts: {
    families: {
      "Racing Sans One": [400],
    },
    base64: true,
    download: true,
    inject: true,
    text: "Acessível, escalável & autossustentável.",
  },
});
