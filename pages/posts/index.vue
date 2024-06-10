<script setup lang="ts">
definePageMeta({
  layout: "page",
});

useSeoMeta({
  title: "Posts",
});
</script>

<template>
  <div>
    <ContentQuery path="/posts" :limit="3">
      <template #default="{ data }">
        <ul class="space-y-10 py-20">
          <li v-for="post of data">
            <div
              class="items-center rounded-lg bg-gray-100 px-10 py-10 md:flex"
            >
              <div class="flex-none md:mr-10 md:border-r md:pr-10">
                <img
                  class="h-40 w-auto"
                  loading="lazy"
                  :src="post.image"
                  :alt="post.name"
                />
              </div>
              <div class="mg:pt-0 w-full pt-5">
                <div class="text-2xl font-semibold text-slate-600">
                  {{ post.title }}
                </div>
                <div class="mt-3 max-w-lg">
                  <ContentRenderer :value="post.excerpt">
                    <ContentRendererMarkdown :value="post.excerpt" />
                  </ContentRenderer>
                </div>
                <nuxt-link
                  class="mt-5 flex max-w-md justify-between rounded-lg border border-gray-200 bg-gradient-to-r from-white px-4 py-1 transition-colors duration-100 hover:to-white"
                  :to="post._path"
                >
                  <span class="inline-block text-gray-600">
                    Ver matéria completa
                  </span>
                  <Icon
                    name="solar:arrow-right-broken"
                    class="text-2xl text-red-600"
                  />
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
  </div>
</template>
