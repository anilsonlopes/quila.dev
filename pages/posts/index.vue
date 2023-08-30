<script setup lang="ts">
definePageMeta({
  layout: "page",
});
</script>

<template>
  <ContentQuery path="/posts">
    <template #default="{ data }">
      <ul class="space-y-5">
        <li v-for="post of data" :key="post.name">
          <nuxt-link :to="post._path">
            <div
              class="flex items-center rounded-lg border border-gray-300 bg-gray-100 p-5 transition-shadow duration-100 hover:shadow-xl dark:border-gray-900"
            >
              <img class="mr-5 h-20" :src="post.image" :alt="post.name" />
              <div class="w-full">
                <div class="font-semibold text-gray-900">
                  {{ post.title }}
                </div>
                <div class="text-gray-600">
                  {{ post.description }}
                </div>
              </div>
              <Icon name="i-heroicons-chevron-right" class="text-black" />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template #not-found>
      <p>Nenhum post encontrado.</p>
    </template>
  </ContentQuery>
</template>
