<template>
  <div>
    <div>{{ route.name }}</div>
    <div>{{ route.params }}</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "nave",
});
const route = useRoute();

useHead({
  title: 'reportar atividade'
})
</script>
