<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/types";

useHead({
  title: "Acessível, escalável e autossustentável",
});

const { data: postsAll } = await useAsyncData("posts", () =>
  queryContent("como-ser-um-programador-melhor").find(),
);

const posts = computed(() => {
  const randomized = postsAll.value?.sort(() => Math.random() * 2 - 1);
  return randomized?.slice(0, 4);
});

const quoteGenerate = (post: ParsedContent) => {
  if (!post.body) {
    return "ERROR 0xE4080A ***CRITICAL FAILURE*** [POST BODY MISSING]";
  }

  if (!post.body.children[1].children) {
    return "ERROR 0xFE9900 ***CRITICAL FAILURE*** [POST CONTENT MISSING]";
  }

  const firstChildOfChild = post.body.children[1].children[0];

  return firstChildOfChild.value;
};

const postPlaceholder =
  "https://images.unsplash.com/photo-1573588028698-f4759befb09a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<template>
  <div class="container mx-auto grid grid-cols-12 gap-6 py-10 lg:gap-12">
    <div class="col-span-12 grid grid-cols-12 gap-4 xl:col-span-8 xl:gap-10">
      <div
        class="col-span-12 flex flex-col justify-between space-y-5 lg:col-span-6 lg:pr-10"
      >
        <h1 class="font-serif text-3xl xl:text-5xl 2xl:text-7xl">
          Cúrriculo disfarçado de portfólio para dev web sem diploma.
        </h1>
        <div>
          <p class="text-sm lg:text-base dark:opacity-70">
            Conheça a vida e obra de Anilson Lopes, engenheiro frontend que
            cresceu no Miramar, o pico da neblina na zona norte da capital
            Alagoana. Atualmente ganha a vida como Lead Front-end Engineer e
            alterna as habilidades entre designer ui-ux e beatmaker.
          </p>
          <ul
            class="font-mono mt-10 flex items-center space-x-10 divide-x divide-dashed divide-neutral-400 whitespace-nowrap text-sm font-black dark:divide-neutral-700"
          >
            <li>
              <div class="font-light">Maceió</div>
              <strong class="block font-bold">BRA</strong>
            </li>
            <li class="pl-5">
              <div class="font-light">Agosto 21</div>
              <strong class="block font-bold">1992</strong>
            </li>
            <li class="pl-5">
              <div class="font-light">info@quila.dev</div>
              <strong class="block font-bold">82 993 220 374</strong>
            </li>
          </ul>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1586999082731-574a06ec7e25?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Imagem"
        class="col-span-12 h-full w-full object-cover lg:col-span-6"
      />
    </div>
    <div class="col-span-12 xl:col-span-4">
      <ul class="grid h-full grid-rows-4 gap-5">
        <li v-for="post in posts" :key="post._id">
          <nuxt-link :to="post._path" class="block">
            <div class="flex items-center space-x-5">
              <img
                class="h-[150px] w-[150px] flex-none object-cover"
                :src="post.image || postPlaceholder"
              />
              <div class="col-span-2 space-y-4">
                <div class="text-xs">
                  {{ post.title }}
                </div>
                <div class="line-clamp-2 text-lg lg:text-xl">
                  "{{ quoteGenerate(post) }}
                </div>
                <div class="text-xs">
                  {{ post.body?.children.length }}min de leitura
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
