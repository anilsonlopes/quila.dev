// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "quila",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  modules: [
    "@nuxt/content",
    "nuxt-gtag",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
    "@vueuse/nuxt",
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
  },
  runtimeConfig: {
    supabaseKey: process.env.SUPABASE_KEY,
  },
});
