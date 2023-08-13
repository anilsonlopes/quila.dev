<script lang="ts" setup>
import { useExploreStore } from "@/stores/explore";
const exploreStore = useExploreStore();
</script>

<template>
  <div
    class="bubble relative col-span-6 flex flex-col items-center justify-end bg-gradient-to-tr from-blue-900 to-blue-700 bg-cover px-8 py-5"
  >
    <button
      type="button"
      class="absolute right-0 top-0 mr-5 mt-5"
      @click="exploreStore.toggleExpandedMode"
    >
      <Icon name="game-icons:expand" />
    </button>
    <div
      class="mb-20 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-5xl text-red-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"
        ></path>
      </svg>
    </div>
    <div
      class="mt-5 flex w-full items-center justify-between border-t border-blue-300 pt-5"
    >
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
