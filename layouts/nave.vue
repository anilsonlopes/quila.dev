
<template>
  <div class="h-screen bg-gray-200 overflow-y-auto">
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "%s \\Vai de nave",
})
</script>