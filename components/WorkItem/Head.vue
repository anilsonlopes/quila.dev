<template>
  <div class="flex items-center justify-between">
    <h3 class="flex space-x-3 text-xl">
      <span>{{ role }}</span> <span class="text-red-500">→</span>
      <a href="#" class="inline-block">{{ company }}</a>
    </h3>
    <div class="bg-red-500 px-3 py-1 text-xs text-white">...</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  role: string;
  company: string;
}>();
</script>

<style></style>
