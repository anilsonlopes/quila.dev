<script setup lang="ts">
definePageMeta({
  layout: "page",
});

const route = useRoute();
const slug =
  typeof route.params.slug === "string"
    ? route.params.slug
    : route.params.slug.join("/");

const path = `/cursos/como-ser-um-programador-melhor/${slug}`;
</script>

<template>
  <div class="prose dark:prose-invert">
    <content-doc :path="path" />
  </div>
</template>
