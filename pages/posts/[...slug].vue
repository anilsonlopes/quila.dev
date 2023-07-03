<script setup lang="ts">
definePageMeta({
  layout: "page",
});
</script>

<template>
  <div class="prose dark:prose-invert">
    <content-doc :path="`/posts/${$route.params.slug}`" />
  </div>
</template>
