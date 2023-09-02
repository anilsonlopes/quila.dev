<script lang="ts" setup>
useHead({
  title: 'Acessível, escalável e autossustentável'
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="text-4xl font-racing font-normal text-gray-900 sm:text-6xl lg:text-7xl">
      Acessível, escalável & autossustentável.
    </h1>
    <ContentQuery path="/posts">
      <template #default="{ data }">
        <ul class="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="post of data" :key="post.name">
            <nuxt-link :to="post._path">
              <div
                class="rounded-lg bg-gray-100 p-5 transition-transform duration-500 ease-in-out -translate-y-4 hover:translate-y-0 hover:border-red-600"
              >
                <img class="w-full h-auto" loading="lazy" :src="post.image" :alt="post.name" />
                <div class="w-full">
                  <div class="text-lg font-semibold text-slate-700">
                    {{ post.title }}
                  </div>
                  <div class="text-slate-600">
                    {{ post.description }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>Nenhum post encontrado.</p>
      </template>
    </ContentQuery>
  </div>
</template>
