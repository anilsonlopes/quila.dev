<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/types";

useHead({
  title: "Acessível, escalável e autossustentável",
});

const { data: posts } = await useAsyncData("posts", () =>
  queryContent("cursos/como-ser-um-programador-melhor").limit(4).find(),
);

const quoteGenerate = (post: ParsedContent) => {
  if (!post.body) {
    return "ERROR 0xE4080A ***CRITICAL FAILURE*** [POST BODY MISSING]";
  }

  const maxChildren = post.body.children.length;
  const randomChild = Math.floor(Math.random() * maxChildren);

  if (!post.body.children[randomChild].children) {
    return "ERROR 0xFE9900 ***CRITICAL FAILURE*** [POST CONTENT MISSING]";
  }

  const firstChildOfChild = post.body.children[randomChild].children[0];

  return firstChildOfChild.value;
};
</script>

<template>
  <div class="grid grid-cols-12 gap-6 lg:gap-12">
    <div class="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8 lg:gap-10">
      <div class="col-span-12 lg:col-span-6 lg:pr-10">
        <h1 class="text-3xl font-light text-white lg:text-7xl">
          Cúrriculo disfarçado de portfólio para dev web sem diploma.
        </h1>
        <p class="mt-10 break-words text-sm italic text-gray-300">
          Conheça a auto biografia de Anilson Lopes, desenvolvedor web que
          cresceu no Miramar, zona norte da capital Alagoana. Atualmente ganha a
          vida como engenheiro front-end e alterna entre botar banca de designer
          ui-ux e beatmaker.
        </p>
        <ul
          class="mt-10 flex items-center space-x-5 divide-x text-sm font-black italic"
        >
          <li>Maceió, BRA</li>
          <li class="pl-5">Agosto 21, 1992</li>
          <li class="pl-5">nissobmx@gmail.com</li>
        </ul>
      </div>
      <img
        src="https://images.unsplash.com/photo-1586999082731-574a06ec7e25?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Imagem"
        class="col-span-12 h-full w-full object-cover lg:col-span-6"
      />
    </div>
    <div class="col-span-12 lg:col-span-4">
      <ul class="space-y-5">
        <li v-for="post in posts" :key="post._id">
          <nuxt-link :to="post._path" class="flex items-center space-x-4">
            <div class="flex-none">
              <img
                src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-[130px] w-[130px] object-cover"
                alt="Imagem"
              />
            </div>
            <div class="space-y-4">
              <div class="text-xs">Como ser um programador melhor</div>
              <div class="line-clamp-2 text-xl">"{{ quoteGenerate(post) }}</div>
              <div class="flex space-x-3 text-xs">
                <div>
                  {{ post.title }}
                </div>
                <div>|</div>
                <div>{{ post.body?.children.length }}min de leitura</div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
