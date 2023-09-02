<script setup lang="ts">
import { ref } from "vue";

const navigation = [
  { name: "Página inicial", href: "/" },
  {
    name: "Como ser um programador melhor",
    href: "/como-ser-um-programador-melhor",
  },
  { name: "Posts", href: "/posts" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-gray-300 z-10">
    <nav
      class="mx-auto flex w-full max-w-6xl items-center justify-between p-6 md:px-8"
      aria-label="Global"
    >
      <div class="flex w-full md:w-auto justify-between">
        <button type="button" class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <Icon name="solar:hamburger-menu-linear" class="text-gray-700 text-2xl " />
        </button>
        <la-quila />
      </div>
      <div class="mt-5 hidden md:mt-0 md:flex md:gap-x-12">
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
    <Transition name="link">
      <div v-show="mobileMenuOpen" class="transform transition-transform z-10 absolute w-full bg-gray-100 border-t border-gray-400 md:hidden">
        <nuxt-link
          v-for="link in navigation"
          :key="link.href"
          :to="link.href"
          class="link py-2 px-5 flex items-center space-x-3 text-sm font-semibold leading-6 text-slate-700 hover:bg-gray-900 hover:text-white"
        >
          <Icon name="solar:arrow-right-bold-duotone" class="text-red-600 link-icon" />
          <span>
          {{ link.name }}

          </span>
        </nuxt-link>
      </div>
    </Transition>
  </header>
</template>

<style scoped lang="postcss">
.link:not(.router-link-exact-active) .link-icon {
  @apply hidden;
}

.link-enter-active,
.link-leave-active {
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: transform, opacity;
  @apply -translate-x-full;
}

.link-enter-from,
.link-leave-to {
  @apply opacity-0;
}
</style>
