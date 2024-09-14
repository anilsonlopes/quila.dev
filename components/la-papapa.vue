<template>
  <button
    class="border border-gray-400 px-5 py-2 text-sm text-gray-100"
    :class="{ updated: updated, idle: !updated }"
    @click="incrementPapapa"
  >
    É {{ countPapapa }} PAPAPA
  </button>
</template>

<script lang="ts" setup>
const updated = ref(false);
const countPapapa = ref(1);

watch(countPapapa, () => {
  updated.value = true;
  setTimeout(() => {
    updated.value = false;
  }, 5000);
});

const incrementPapapa = () => {
  countPapapa.value++;
};
</script>

<style scoped lang="postcss">
.updated {
  animation: updated 2s linear infinite;
}

.idle {
  animation: idle 2s linear infinite;
}

@keyframes updated {
  0% {
    @apply bg-white text-black;
  }
  100% {
    @apply bg-black text-white;
  }
}

@keyframes idle {
  0%,
  100% {
    @apply opacity-0;
  }
  50% {
    @apply opacity-50;
  }
}
</style>
