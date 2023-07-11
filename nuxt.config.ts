// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "@nuxt/content", "nuxt-gtag"],
  devtools: { enabled: true },
  content: {
    highlight: {
      theme: {
        default: "github-dark",
      },
    },
  },
  gtag: {
    id: "G-V8GX23DB8H",
  },
});
