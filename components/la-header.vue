<script setup lang="ts">
import { useToggle } from "@vueuse/core";

const route = useRoute();

const navigation = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Como ser um programador melhor",
    href: "/como-ser-um-programador-melhor",
  },
  {
    name: "Posts",
    href: "/posts",
  },
];
</script>

<template>
  <header class="flex items-center justify-between py-5 text-neutral-200">
    <la-quila class="whitespace-nowrap" />

    <nav class="flex items-center justify-end space-x-2" aria-label="Global">
      <nuxt-link
        v-for="link in navigation"
        :key="link.href"
        :to="link.href"
        class="inline-block border-b border-transparent px-4 py-2 text-sm opacity-75 transition-opacity hover:opacity-100"
      >
        <span>
          {{ link.name }}
        </span>
      </nuxt-link>
    </nav>
  </header>
</template>
