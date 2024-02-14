<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const navigation = [
  {
    name: "Como ser um programador melhor",
    href: "/como-ser-um-programador-melhor",
  },
  { name: "Posts", href: "/posts" },
  { name: "Newsletter", href: "/news" },
];

const mobileMenuOpen = ref(false);
const mobileMenuElement = ref(null);

onClickOutside(mobileMenuElement, () => {
  mobileMenuOpen.value = false;
})
</script>

<template>
  <header class="bg-gray-300">
    <nav
      class="mx-auto flex w-full max-w-6xl items-center justify-between p-6 md:px-8"
      aria-label="Global"
    >
      <div class="flex w-full justify-between md:w-auto">
        <button
          type="button"
          class="md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon
            name="solar:hamburger-menu-linear"
            class="text-2xl text-gray-700"
          />
        </button>
        <nuxt-link to="/">
          <la-quila />
        </nuxt-link>
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
      <div
        v-show="mobileMenuOpen"
        class="absolute z-10 w-full transform bg-gray-100 shadow-2xl transition-transform md:hidden"
        ref="mobileMenuElement"
      >
        <nuxt-link
          v-for="link in navigation"
          :key="link.href"
          :to="link.href"
          class="link flex items-center space-x-3 px-5 py-2 text-sm font-semibold leading-6 text-slate-700 hover:bg-blue-600 hover:text-white"
        >
          <Icon
            name="solar:emoji-funny-circle-outline"
            class="link-icon text-xl text-red-600"
          />
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
