<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
defineOgImage();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <SpeedInsights />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1px);
  transform: translateX(-13px);
}
</style>
