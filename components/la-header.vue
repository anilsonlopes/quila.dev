<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const route = useRoute();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const navigation = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Como ser um programador melhor",
    href: "/jornada/como-ser-um-programador-melhor",
  },
  {
    name: "Posts",
    href: "/posts",
  },
];
</script>

<template>
  <header class="bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200">
    <nav class="flex items-center justify-end space-x-2" aria-label="Global">
      <nuxt-link
        v-for="link in navigation"
        :key="link.href"
        :to="link.href"
        class="link block border-b border-transparent px-4 py-2 transition-colors"
      >
        <span>
          {{ link.name }}
        </span>
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.link.router-link-exact-active {
  @apply border-red-600;
}
</style>
