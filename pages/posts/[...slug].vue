<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div class="tw-mb-10">
      <la-back fallback="/posts" />
    </div>
    <div class="prose prose-invert pb-10">
      <content-doc :path="`/posts/${$route.params.slug}`" class="mt-10" />
    </div>
  </div>
</template>
