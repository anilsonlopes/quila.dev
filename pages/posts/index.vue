<script setup lang="ts">
definePageMeta({
  layout: "page",
});
</script>

<template>
  <ContentQuery path="/posts" :limit="3">
    <template #default="{ data }">
      <ul class="space-y-10 py-20">
        <li v-for="post of data">
          <div
            class="rounded-lg md:flex items-center bg-gray-100 px-10 py-10"
          >
            <img class="w-auto h-40" loading="lazy" :src="post.image" :alt="post.name" />
            <div class="w-full pt-5 mg:pt-0">
              <div class="text-2xl font-semibold text-slate-600">
                {{ post.title }}
              </div>
              <div class="text-slate-500 mt-3 max-w-lg">
                {{ post.summary }}
              </div>
              <nuxt-link class="flex justify-between mt-5 max-w-md bg-gradient-to-r from-white py-1 rounded-lg border border-gray-200 px-4 hover:to-white transition-colors duration-100" :to="post._path">
                <span class="inline-block text-gray-600">
                  Ver matéria completa
                </span>
                <Icon name="solar:arrow-right-broken" class="text-red-600 text-2xl" />
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </template>
    <template #not-found>
      <p>Nenhum post encontrado.</p>
    </template>
  </ContentQuery>
</template>
