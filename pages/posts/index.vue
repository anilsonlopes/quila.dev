<script setup lang="ts">
useSeoMeta({
  title: "Posts",
});

defineOgImage({
  props: {
    description: "Diretório de pesquisa, estudos e artigos do Quila.",
  },
});
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Posts</h1>
    <h3 class="mt-1 text-lg text-gray-600">Diretório de publicações.</h3>
    <ContentQuery path="/posts" :limit="3">
      <template #default="{ data }">
        <ul class="space-y-10 py-20">
          <li v-for="post of data">
            <nuxt-link class="inline-block" :to="post._path">
              <div class="flex flex-col gap-5 md:flex-row md:items-center">
                <div
                  class="flex h-52 w-52 flex-none items-center justify-center rounded bg-neutral-400"
                >
                  <img
                    class="h-40 w-auto"
                    loading="lazy"
                    :src="post.image"
                    :alt="post.name"
                  />
                </div>
                <div>
                  <div class="text-2xl text-neutral-100">
                    {{ post.title }}
                  </div>
                  <div class="mt-3 max-w-lg text-neutral-400">
                    <ContentRenderer :value="post.excerpt">
                      <ContentRendererMarkdown :value="post.excerpt" />
                    </ContentRenderer>
                  </div>
                  <div class="mt-4 text-sm">3 mins de leitura</div>
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
