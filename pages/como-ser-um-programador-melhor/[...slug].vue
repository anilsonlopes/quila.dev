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
  <div>
    <div class="mb-10">
      <la-back fallback="/como-ser-um-programador-melhor" />
    </div>
    <div class="prose pb-10">
      <content-doc :path="path" />
    </div>
  </div>
</template>
