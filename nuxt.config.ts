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
    "@nuxtjs/seo",
  ],
  devtools: { enabled: true },
  gtag: {
    id: "G-N4V4MBDWX9",
  },
  googleFonts: {
    families: {
      "Racing Sans One": [400],
      Roboto: true
    },
    base64: true,
    download: true,
    inject: true,
  },
  anime: {
    composables: true,
  },

  site: {
    url: "https://quila.dev",
    name: "Quila",
    description: "Acessível, escalável e autossustentável.",
  },
});
