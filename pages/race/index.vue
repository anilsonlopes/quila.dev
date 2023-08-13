<template>
  <div id="app" class="grid h-screen grid-cols-6 gap-2 p-2">
    <BubbleHowTo v-if="showingBubbles[Bubble.ComoFunciona]" />
    <BubbleJoin v-if="showingBubbles[Bubble.Entrar]" />
    <BubbleAd v-if="showingBubbles[Bubble.Anuncio]" />
    <BubbleExplore v-if="showingBubbles[Bubble.Explorar]" />
  </div>
</template>

<style lang="postcss" scoped>
.bubble {
  @apply rounded-xl;
}

.bubble--btn {
  @apply rounded-xl bg-white px-5 py-1 text-red-600;
}

.bubble--btn-circle {
  @apply flex h-10 w-10 items-center justify-center rounded-full bg-white text-black;
}

.bubble--header {
  @apply absolute inset-x-0 top-0 flex w-full items-center justify-between p-5;
}

.bubble--backdrop {
  @apply max-w-xs rounded-2xl bg-white/60 p-5 italic leading-snug text-gray-600 backdrop-blur-lg;
}
</style>

<script lang="ts" setup>
definePageMeta({
  layout: "race",
});

enum Bubble {
  Anuncio = "ad",
  ComoFunciona = "how-to",
  Entrar = "join",
  Explorar = "explore",
}

const showingBubbles = ref({
  [Bubble.ComoFunciona]: true,
  [Bubble.Anuncio]: true,
  [Bubble.Entrar]: true,
  [Bubble.Explorar]: true,
});

const exploreMode = ref(false);

function toggleExploreMode() {
  if (exploreMode.value) {
    desactiveExploreMode();
  } else {
    activeExploreMode();
  }

  showingBubbles.value[Bubble.Explorar] = true;
}

function activeExploreMode() {
  exploreMode.value = true;

  showingBubbles.value[Bubble.Anuncio] = false;
  showingBubbles.value[Bubble.ComoFunciona] = false;
  showingBubbles.value[Bubble.Entrar] = false;
  showingBubbles.value[Bubble.Explorar] = true;
}

function desactiveExploreMode() {
  exploreMode.value = false;

  showingBubbles.value[Bubble.Anuncio] = true;
  showingBubbles.value[Bubble.ComoFunciona] = true;
  showingBubbles.value[Bubble.Entrar] = true;
  showingBubbles.value[Bubble.Explorar] = true;
}
</script>
