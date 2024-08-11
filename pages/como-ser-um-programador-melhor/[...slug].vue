<script setup lang="ts">
const route = useRoute();
const slug =
  typeof route.params.slug === "string"
    ? route.params.slug
    : route.params.slug.join("/");

const path = `como-ser-um-programador-melhor/${slug}`;
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-10">
      <la-back fallback="/como-ser-um-programador-melhor" />
    </div>
    <div class="prose prose-blue prose-invert pb-10">
      <content-doc :path="path" />
    </div>
  </div>
</template>
