import { Loader } from "@googlemaps/js-api-loader";

export default defineNuxtPlugin(async (nuxtApp) => {
  const loader = new Loader({
    apiKey: "",
    version: "weekly",
  });
  const { Map } = await loader.importLibrary("maps");

  return {
    provide: {
      Map,
    },
  };
});
