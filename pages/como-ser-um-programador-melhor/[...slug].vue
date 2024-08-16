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
    <div class="mt-10 grid grid-cols-2 gap-10">
      <video
        poster="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="sticky top-0 aspect-video w-full rounded object-cover"
        src="/vidz/sample-video.mp4"
        controls
      />
      <div class="prose prose-blue prose-invert pb-10">
        <content-doc :path="path" />
      </div>
    </div>
  </div>
</template>
