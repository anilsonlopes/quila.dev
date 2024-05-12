<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: "Acessível, escalável e autossustentável",
});

const query: QueryBuilderParams = {
  path: "/posts",
  sort: [{ _id: -1 }],
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    opa
  </div>
</template>
