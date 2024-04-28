<template>
  <div class="grid min-h-screen bg-gray-200 md:grid-cols-2">
    <div
      class=" bg-gradient-to-bl from-gray-200 to-gray-300 flex flex-col items-center justify-center bg-white p-10 md:p-0"
    >
      <h1 class="text-3xl font-bold md:text-9xl">
        {{ props.error?.statusCode || ".-." }}
      </h1>
      <h4 class="mt-2 md:text-2xl md:font-bold">
        {{ props.error?.message || "Erro desconhecido" }}
      </h4>
      <button
        type="button"
        class="mt-5 rounded bg-gray-900 px-5 py-2 text-gray-100 md:mt-10 md:px-10 md:py-3 md:text-lg"
        @click="handleError"
      >
        Ir para o início
      </button>
    </div>
    <div class="flex items-center justify-center p-10 md:p-0">
      <img
        src="/transistor-meditating-man-sitting-on-a-cloud-of-thoughts.gif"
        alt="Meditating Man Sitting On A Cloud"
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>
