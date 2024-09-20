<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
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
    href: "/como-ser-um-programador-melhor",
  },
  { name: "Posts", href: "/posts" },
];

const mobileMenuOpen = ref(false);
const mobileMenuElement = ref(null);

onClickOutside(mobileMenuElement, () => {
  mobileMenuOpen.value = false;
  enablePageOverflow();
});

const enablePageOverflow = () => {
  document.body.style.overflow = "auto";
};

const disablePageOverflow = () => {
  document.body.style.overflow = "hidden";
};

watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    disablePageOverflow();
  } else {
    enablePageOverflow();
  }
});

watch(
  () => route.fullPath,
  () => {
    enablePageOverflow();
    mobileMenuOpen.value = false;
  },
);
</script>

<template>
  <header>
    <nav
      class="container mx-auto border-b border-neutral-300 py-5 dark:border-neutral-800"
      aria-label="Global"
    >
      <div class="flex w-full justify-between">
        <button type="button" @click="toggleDark(!isDark)">
          <Icon
            :name="isDark ? 'solar:sun-2-linear' : 'solar:moon-linear'"
            class="text-2xl"
          />
        </button>
        <nuxt-link to="/">
          <la-quila />
        </nuxt-link>
        <button type="button" @click="mobileMenuOpen = !mobileMenuOpen">
          <Icon name="solar:hamburger-menu-linear" class="text-2xl" />
        </button>
      </div>
      <div v-show="mobileMenuOpen">
        <div
          class="fixed inset-0 z-50 overflow-y-auto bg-neutral-100 p-5 dark:bg-neutral-900"
        >
          <ul class="space-y-5">
            <li
              class="flex items-center justify-between text-sm uppercase dark:text-neutral-400"
            >
              <div>Navegação</div>
              <button type="button" @click="mobileMenuOpen = !mobileMenuOpen">
                <Icon
                  name="vaadin:close"
                  class="text-2xl dark:text-neutral-100"
                />
              </button>
            </li>
            <li v-for="link in navigation" :key="link.href">
              <nuxt-link
                :to="link.href"
                class="link border-b border-transparent transition-colors hover:border-red-600 dark:text-neutral-200"
              >
                <span>
                  {{ link.name }}
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.link.router-link-exact-active {
  @apply border-red-600;
}
</style>
