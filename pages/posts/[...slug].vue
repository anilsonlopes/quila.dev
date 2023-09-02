<script setup lang="ts">
definePageMeta({
  layout: "page",
});
</script>

<template>
  <div class="prose">
    <content-doc :path="`/posts/${$route.params.slug}`" />
  </div>
</template>
