<template>
  <div>
    <nuxt-link :to="post._path" :class="{ 'md:flex md:space-x-3': highlight }">
      <img
        class="block h-48 w-auto"
        loading="lazy"
        :src="post.image"
        :alt="post.name"
      />
      <div class="w-full">
        <h2 class="font-semibold text-slate-700 md:text-lg">
          {{ post.title }}
        </h2>
        <h4 class="text-sm text-slate-600 md:mt-2">
          {{ post.description }}
        </h4>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps({
  post: {
    type: Object as () => ParsedContent,
    required: true,
  },
  highlight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
