<script setup lang="ts"></script>

<template>
  <div>
    <div class="tw-mb-10">
      <la-back fallback="/posts" />
    </div>
    <div class="prose pb-10">
      <content-doc :path="`/posts/${$route.params.slug}`" class="mt-10" />
    </div>
  </div>
</template>
