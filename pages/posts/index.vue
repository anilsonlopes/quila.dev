<script setup lang="ts">
const { data, status } = await useAsyncData("posts", () =>
  queryContent("/posts").find(),
);
</script>

<template>
  <div class="space-y-5">
    <la-page-title>Blog</la-page-title>
    <p>
      Não sou de escrever muito, mas quando escrevo, escrevo muito. Aqui você
      encontra meus artigos, estudos e pesquisas.
    </p>
    <ul class="space-y-3">
      <li v-for="post of data">
        <nuxt-link class="inline-block" :to="post._path">
          <div class="flex items-center justify-between space-x-2">
            <div class="border-b border-neutral-400">
              {{ post.title }}
            </div>
            <div class="bg-white px-2 py-1 text-xs dark:bg-neutral-800">
              {{ readingTime(JSON.stringify(post.body)) }} mins de leitura
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <div v-if="status === 'pending'">
      <p>Carregando...</p>
    </div>
  </div>
</template>
