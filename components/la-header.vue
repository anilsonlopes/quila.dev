<script setup>
import { ref } from "vue";

const navigation = [
  { name: "Página inicial", href: "/" },
  {
    name: "Como ser um programador melhor",
    href: "/como-ser-um-programador-melhor",
  },
  { name: "Publicações", href: "/posts" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header>
    <nav
      class="mx-auto flex w-full max-w-6xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <la-quila @toggle-menu="mobileMenuOpen = !mobileMenuOpen" />
      <div class="bg-white lg:hidden">
        <nuxt-link
          v-for="link in navigation"
          :key="link.href"
          :to="link.href"
          class="group relative block text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900"
        >
          {{ link.name }}
          <span
            class="absolute -bottom-3 left-0 h-1 w-full origin-left scale-x-0 transform border-t-2 border-red-600 transition-transform duration-100 ease-in group-hover:scale-x-100"
          ></span>
        </nuxt-link>
      </div>
      <div class="mt-5 hidden lg:mt-0 lg:flex lg:gap-x-12">
        <nuxt-link
          v-for="link in navigation"
          :key="link.href"
          :to="link.href"
          class="group relative block text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900"
        >
          {{ link.name }}
          <span
            class="absolute -bottom-3 left-0 h-1 w-full origin-left scale-x-0 transform border-t-2 border-red-600 transition-transform duration-100 ease-in group-hover:scale-x-100"
          ></span>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
