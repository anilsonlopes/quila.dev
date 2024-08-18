<script lang="ts" setup>
defineProps<{
  title: string;
  src: string;
  poster: string;
}>();
</script>

<template>
  <section>
    <div class="mx-auto max-w-3xl py-10">
      <div class="relative">
        <button
          type="button"
          class="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-blue-700 bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
            />
          </svg>
        </button>
        <video :src="src" :poster="poster"></video>
      </div>
      <div class="mt-2 text-sm">
        {{ title }}
      </div>
    </div>
  </section>
</template>
