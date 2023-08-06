<script setup>
import { ref } from "vue";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Como ser um programador melhor",
    href: "/como-ser-um-programador-melhor",
  },
  { name: "Posts", href: "/posts" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header>
    <nav
      class="mx-auto flex w-full max-w-6xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <la-quila />
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link
          v-for="link in navigation"
          :key="link.href"
          :to="link.href"
          class="group relative text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
        >
          {{ link.name }}
          <span
            class="absolute -bottom-3 left-0 h-1 w-full origin-center scale-x-0 transform border-t-2 border-red-600 transition-transform duration-200 ease-in group-hover:scale-x-100"
          ></span>
        </nuxt-link>
      </div>

      <div class="flex flex-1 justify-end">
        <la-color-theme />
      </div>
    </nav>
  </header>
</template>
