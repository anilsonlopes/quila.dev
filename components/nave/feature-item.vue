<script lang="ts" setup>
const props = defineProps({
  icon: String,
  title: String,
  body: String,
});
</script>

<template>
  <div class="bg-gray-100 p-8 rounded-lg shadow border border-gray-300">
    <div class="text-5xl">{{ props.icon }}</div>
    <div class="text-gray-700 text-lg mt-5">
      <strong>{{ props.title }}</strong>
    </div> 
    <div class="mt-2 text-gray-600">
      {{ props.body }}
    </div>
  </div>
</template>