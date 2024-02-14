<template>
  <div>
    <nuxt-link :to="post._path">
      <img
        class="block"
        loading="lazy"
        :src="post.image"
        :alt="post.name"
        :class="{ 'w-auto h-full': highlight, 'w-auto h-48': !highlight }"
      />
      <div class="w-full">
        <h2
          class="font-semibold text-slate-700"
          :class="{ 'md:text-3xl': highlight, 'md:text-lg': !highlight }"
        >
          {{ post.title }}
        </h2>
        <h4
          class="text-sm text-slate-600 md:mt-2"
          :class="{ 'md:text-lg ': highlight }"
        >
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
