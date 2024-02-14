<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: "Acessível, escalável e autossustentável",
});

const query: QueryBuilderParams = {
  path: "/posts",
  sort: [{ _id: -1 }],
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <h1
      class="font-racing text-4xl font-normal text-gray-900 sm:text-6xl lg:text-7xl"
    >
      Acessível<span class="text-red-500">,</span> escalável
      <span class="text-red-500">&</span> autossustentável
      <span class="text-red-500">.</span>
    </h1>
    <ContentList :query="query">
      <template #default="{ list }">
        <ul
          class="mt-8 grid grid-cols-2 grid-rows-2 gap-1 sm:grid-cols-3 items-start 2xl:grid-cols-4"
        >
          <li
            v-for="(post, postIndex) in list"
            :key="post.name"
            class="rounded p-4"
            :class="{
              'col-span-2 row-span-2 md:row-span-3 border border-white bg-gradient-to-t from-gray-300 to-slate-200':
                postIndex === 0,
              'bg-gray-100': postIndex > 0,
            }"
          >
            <LaPostSummary :post="post" :highlight="postIndex === 0" />
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>Nenhum post encontrado.</p>
      </template>
    </ContentList>
  </div>
</template>
