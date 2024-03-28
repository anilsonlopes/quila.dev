// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "quila",
      script: [
        {
          key: "pagesense",
          src: "https://cdn.pagesense.io/js/quiladev/8450d6c23e7c41feabd472795fa3bc5d.js",
          async: true,
        },
      ],
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
    id: "G-N4V4MBDWX9",
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
  anime: {
    composables: true,
  },
});
