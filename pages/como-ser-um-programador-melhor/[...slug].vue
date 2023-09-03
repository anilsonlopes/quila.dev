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
  <div class="prose pb-10">
    <div class="mb-10">
      <nuxt-link class="flex max-w-md bg-gradient-to-r no-underline from-white py-1 rounded-lg border border-gray-200 px-4 hover:to-white transition-colors duration-100" to="/como-ser-um-programador-melhor">
        <Icon name="solar:arrow-left-broken" class="text-red-600 text-2xl" />
        <span class="inline-block text-gray-600 ml-4">
          Como ser um programador melhor
        </span>
      </nuxt-link>
    </div>
    <content-doc :path="path" />
  </div>
</template>
