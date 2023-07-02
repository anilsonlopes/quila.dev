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
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">labfero</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            @click="mobileMenuOpen = true"
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <nuxt-link
            to="/login"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
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
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {{ link.name }}
                </nuxt-link>
              </div>
              <div class="py-6">
                <a
                  href="/login"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </div>
      </u-slideover>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Como ser um programador melhor
            <nuxt-link
              to="/como-ser-um-programador-melhor"
              class="font-semibold text-indigo-600"
            >
              Saiba mais <span aria-hidden="true">&rarr;</span>
            </nuxt-link>
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Acessível, escalável, autossustentável.
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Gosto de ter em mente esses três itens no desenvolvimento de
            qualquer coisa. É comum ter dificuldade em manter esses três pilares
            alinhado, mas mantendo a intensão, tudo estará bem.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <nuxt-link
              to="/como-ser-um-programador-melhor"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Inicie agora
            </nuxt-link>
            <nuxt-link
              to="/posts"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Meus posts <span aria-hidden="true">→</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
