import Hotjar from "@hotjar/browser";

export default defineNuxtPlugin((nuxtApp) => {
  const siteId = 5126387;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);
});
