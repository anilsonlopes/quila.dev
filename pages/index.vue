<template>
  <div class="flex flex-col min-h-screen justify-center">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div
        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-100/10 dark:hover:ring-gray-100/20"
      >
        Como ser um programador melhor
        <nuxt-link
          to="/como-ser-um-programador-melhor"
          class="ml-3 font-semibold text-blue-600 dark:text-blue-400"
        >
          Saiba mais <span aria-hidden="true">&rarr;</span>
        </nuxt-link>
      </div>
    </div>
    <div class="text-center">
      <h1
        class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
      >
        Acessível, escalável, autossustentável.
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Gosto de ter em mente esses três itens no desenvolvimento de qualquer
        coisa. É comum ter dificuldade em manter esses três pilares alinhado,
        mas mantendo a intensão, tudo estará bem.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <nuxt-link
          to="/como-ser-um-programador-melhor"
          class="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
        >
          Inicie agora
        </nuxt-link>
        <nuxt-link
          to="/posts"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
        >
          Meus posts <span aria-hidden="true">→</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
