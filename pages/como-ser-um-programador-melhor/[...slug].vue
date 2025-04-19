<script setup lang="ts">
const route = useRoute();

const currentPath =
  typeof route.params.slug === "string"
    ? route.params.slug
    : route.params.slug.join("/");
const contentPath = `/como-ser-um-programador-melhor/${currentPath}`;
</script>

<template>
  <div class="prose prose-invert">
    <ContentDoc :path="contentPath" class="mt-10">
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    </ContentDoc>
  </div>
</template>
