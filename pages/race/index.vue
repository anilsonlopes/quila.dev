<template>
  <div id="app" class="grid h-screen grid-cols-6 gap-2 p-2">
    <div
      v-if="showingBubbles['how-to']"
      class="bubble relative col-span-3 flex items-end bg-cover bg-center p-5 md:col-span-3"
      style="
        background-image: url('https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
      "
    >
      <div class="bubble--header">
        <nuxt-link to="/race/criar-conta" class="bubble--btn">
          Como funciona
        </nuxt-link>
        <nuxt-link
          to="https://instagram.com/quilamcz"
          class="bubble--btn-circle"
        >
          <Icon name="ph:instagram-logo-light" />
        </nuxt-link>
      </div>
      <div class="bubble--backdrop">
        Colecione conquistas enquanto interage com o mundo a sua volta.
      </div>
    </div>
    <div
      v-if="showingBubbles.join"
      class="bubble relative col-span-3 flex items-center bg-gradient-to-tr from-red-800 to-red-500 bg-cover px-10 py-5 md:col-span-3"
      style="
        background-image: url('https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80');
      "
    >
      <div class="flex items-center space-x-5">
        <div class="h-20 w-20 overflow-hidden rounded-full bg-white"></div>
        <div
          class="ml-5 text-xl font-semibold uppercase italic leading-none text-gray-100"
        >
          <div>Explore sua área,</div>
          <div>colecione conquistas</div>
        </div>
      </div>
    </div>
    <div
      v-if="showingBubbles.ad"
      class="bubble col-span-6 flex items-center justify-center bg-gray-100 text-gray-300"
    >
      <div>ad</div>
    </div>
    <div
      v-if="showingBubbles.explore"
      class="bubble relative col-span-6 flex flex-col items-center justify-end bg-gradient-to-tr from-blue-900 to-blue-700 bg-cover px-8 py-5"
    >
      <button
        type="button"
        class="absolute right-0 top-0 mr-5 mt-5"
        @click="toggleExploreMode"
      >
        <Icon name="game-icons:expand" />
      </button>
      <div
        class="mb-20 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-5xl text-red-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"
          ></path>
        </svg>
      </div>
      <div
        class="mt-5 flex w-full items-center justify-between border-t border-blue-300 pt-5"
      >
        <div class="font-semibold uppercase text-white">
          <div class="text-3xl font-bold">100k</div>
          <div class="uppercase text-white">Connected users</div>
        </div>
        <div class="font-semibold uppercase text-white">
          <div class="text-3xl font-bold">24/7</div>
          <div class="uppercase text-white">Level up</div>
        </div>
      </div>
    </div>
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
