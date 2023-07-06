// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "@nuxt/content"],
  devtools: { enabled: true },
  content: {
    highlight: {
      theme: {
        default: "hc_light",
        dark: "one-dark-pro",
      },
    },
  },
});
