<template>
  <ul class="flex flex-wrap gap-2 pt-3">
    <li v-for="tag in tags">
      <div class="border border-neutral-700 px-2 py-1 text-xs">
        {{ tag }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps({
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<style></style>
