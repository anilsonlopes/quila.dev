<template>
  <div class="p-10">
    <div class="mb-2 text-xl font-bold text-gray-900">Atividade</div>
    <ul class="space-y-4">
      <li v-for="index in 7">
        <div class="rounded bg-white p-3">
          <div class="font-semibold text-gray-500">2134</div>
          <div class="font-medium text-gray-700 uppercase">Marechal</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "nave",
});
</script>
