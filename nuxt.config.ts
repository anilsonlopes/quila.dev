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
    "nuxt-swiper",
  ],

  devtools: { enabled: true },

  gtag: {
    id: "G-N4V4MBDWX9",
  },

  googleFonts: {
    families: {
      Inter: true,
      "Space Grotesk": true,
      "Space Mono": true,
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
    name: "Anilson Lopes",
    description:
      "Atualmente ganha a vida como Lead Front-end Engineer e alterna as habilidades entre designer ui-ux e beatmaker.",
  },

  compatibilityDate: "2024-08-08",
});
