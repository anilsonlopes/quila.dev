<template>
  <span
    role="button"
    class="bg-black p-2 font-mono text-sm text-green-500"
    @click="toggle"
  >
    {{ expanded ? "" : "<>" }}
    <span v-show="expanded">
      <slot />
    </span>
  </span>
</template>

<script lang="ts" setup>
const expanded = ref(false);

const toggle = () => {
  //   Track it
  expanded.value = !expanded.value;
};
</script>
