<template>
  <div id="app" class="grid h-screen grid-cols-6 gap-2 p-2">
    <BubbleHowTo v-if="!exploreStore.expandedMode" />
    <BubbleJoin v-if="!exploreStore.expandedMode" />
    <BubbleAd v-if="!exploreStore.expandedMode" />
    <BubbleExplore />
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
import { useExploreStore } from "@/stores/explore";

definePageMeta({
  layout: "race",
});

const exploreStore = useExploreStore();
</script>
