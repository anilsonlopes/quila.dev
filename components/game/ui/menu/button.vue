<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="rounded border border-black bg-yellow-400 py-2 font-semibold text-gray-900"
    :style="{ boxShadow: '1px 1px 0 black' }"
    :class="{
      'cursor-not-allowed opacity-60': disabled,
      'hover:bg-yellow-700 hover:text-white': !disabled,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
