<script lang="ts" setup>
const quila = 'quila'
</script>

<template>
  <div class="w-auto">
    <div
      to="/"
      class="inline-block rounded-xl p-1 text-2xl font-bold font-mono leading-none text-gray-900"
    >
      <span v-for="(letter, letterIndex) in quila" class="quila" :style="{ animationDelay: `${letterIndex}00ms` }">
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.quila {
  animation: quila 1s ease-in-out infinite;
  @apply relative;
}

.quila:before {
  content: '';
  @apply absolute w-10 h-4 bg-current blur-2xl -z-10 opacity-60;
}

@keyframes quila {
  0%, 30% {
    @apply text-red-500;
  }
  50%, 80% {
    @apply text-blue-500;
  }
  100% {
    @apply text-gray-900;
  }
}
</style>