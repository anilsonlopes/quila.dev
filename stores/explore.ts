enum Bubble {
  Anuncio = "ad",
  ComoFunciona = "how-to",
  Entrar = "join",
  Explorar = "explore",
}

export const useExploreStore = defineStore("explore", {
  state: () => ({
    expandedMode: false,
  }),
  actions: {
    toggleExpandedMode() {
      this.expandedMode = !this.expandedMode;
    },
  },
});
