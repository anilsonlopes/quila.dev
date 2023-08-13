<script lang="ts" setup>
import { useExploreStore } from "@/stores/explore";
const exploreStore = useExploreStore();
</script>

<template>
  <div
    class="col-span-6 flex flex-col rounded-xl bg-gradient-to-tr from-blue-900 to-blue-700"
  >
    <div class="flex justify-end p-5">
      <button type="button" @click="exploreStore.toggleExpandedMode">
        <Icon name="game-icons:expand" />
      </button>
    </div>
    <div class="h-full bg-red-600">
      <la-map />
    </div>
    <div class="flex items-center justify-between border-blue-300 p-5">
      <div class="font-semibold uppercase text-white">
        <div class="text-3xl font-bold">100k</div>
        <div class="uppercase text-white">Connected users</div>
      </div>
      <div class="font-semibold uppercase text-white">
        <div class="text-3xl font-bold">24/7</div>
        <div class="uppercase text-white">Level up</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
