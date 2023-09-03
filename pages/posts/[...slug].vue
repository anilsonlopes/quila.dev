<script setup lang="ts">
definePageMeta({
  layout: "page",
});
</script>

<template>
  <div>
    <div class="tw-mb-10">
      <nuxt-link class="flex max-w-md bg-gradient-to-r no-underline from-white py-1 rounded-lg border border-gray-200 px-4 hover:to-white transition-colors duration-100" to="/posts">
        <Icon name="solar:arrow-left-broken" class="text-red-600 text-2xl" />
        <span class="inline-block text-gray-600 ml-4">
          Posts
        </span>
      </nuxt-link>
    </div>
    <div class="prose pb-10">
      <content-doc :path="`/posts/${$route.params.slug}`" class="mt-10" />
    </div>
  </div>
</template>
