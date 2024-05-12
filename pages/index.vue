<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: "Acessível, escalável e autossustentável",
});

definePageMeta({
  layout: "studio",
});

const query: QueryBuilderParams = {
  path: "/posts",
  sort: [{ _id: -1 }],
};
</script>

<template>
  <div>
    <la-header />
    <StudioHeader />
    <StudioSolutions />
    <StudioProccess />
  </div>
</template>
