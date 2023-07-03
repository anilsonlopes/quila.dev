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
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <la-color-theme />
      </div>
      <div class="flex lg:hidden">
        <button
          @click="mobileMenuOpen = true"
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
        >
          <span class="sr-only">Abrir menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
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
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <nuxt-link
          to="/"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
        >
          labfero
        </nuxt-link>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <u-slideover
      v-model="mobileMenuOpen"
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="px-6 py-6">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">labfero</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Fechar menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                v-for="link in navigation"
                :key="link.href"
                :to="link.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/30"
              >
                {{ link.name }}
              </nuxt-link>
            </div>
            <div class="py-6">
              <nuxt-link
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/30"
              >
                labfero
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </u-slideover>
  </header>
</template>
