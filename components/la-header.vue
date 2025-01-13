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
    name: "Trabalho",
    href: "/trabalho",
  },
  { name: "Projetos", href: "/projetos" },
  { name: "Posts", href: "/posts" },
];
</script>

<template>
  <header class="bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200">
    <nav class="flex items-center justify-between" aria-label="Global">
      <ul class="flex space-x-2">
        <li v-for="link in navigation" :key="link.href">
          <nuxt-link
            :to="link.href"
            class="link block border-b border-transparent px-4 py-2 transition-colors"
          >
            <span>
              {{ link.name }}
            </span>
          </nuxt-link>
        </li>
      </ul>
      <button type="button" class="px-3" @click="toggleDark(!isDark)">
        <Icon
          :name="isDark ? 'solar:sun-2-linear' : 'solar:moon-linear'"
          class="text-2xl"
        />
      </button>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.link.router-link-exact-active {
  @apply border-red-600;
}
</style>
