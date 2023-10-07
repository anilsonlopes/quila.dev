<script setup lang="ts">
defineProps<{
  count: number;
  icon: string;
  selected: boolean;
}>();
</script>

<template>
  <button
    class="relative flex flex-col items-center justify-center rounded-lg border border-gray-600 text-3xl text-green-600"
    :class="{ 'bg-yellow-300': selected }"
  >
    <Icon :name="icon" class="my-2" />
    <span
      v-if="count >= 0"
      class="absolute right-0 top-0 rounded-bl-md rounded-tr-lg bg-gray-600 p-1 text-sm leading-none text-gray-100"
    >
      {{ count }}
    </span>
  </button>
</template>
