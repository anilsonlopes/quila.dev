<template>
  <div>
    <nuxt-link :to="post._path">
      <div
        class="rounded-lg bg-gray-100 p-5 transition-transform duration-500 ease-in-out -translate-y-4 hover:translate-y-0 hover:border-red-600"
      >
        <img class="w-full h-auto" loading="lazy" :src="post.image" :alt="post.name" />
        <div class="w-full">
          <div class="text-lg font-semibold text-slate-700">
            {{ post.title }}
          </div>
          <div class="text-slate-600">
            {{ post.description }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps(['post'])
</script>

<style scoped>

</style>