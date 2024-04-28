<template>
  <div class="grid min-h-screen md:grid-cols-2 bg-gray-200">
    <div class="p-10 md:p-0 flex flex-col items-center justify-center bg-white">
      <h1 class="text-3xl md:text-9xl font-bold">
        {{ props.error?.statusCode || ".-." }}
      </h1>
      <h4 class="mt-2 md:text-2xl md:font-bold">
        {{ props.error?.message || "Erro desconhecido" }}
      </h4>
      <button
        type="button"
        class="mt-5 md:mt-10 rounded bg-gray-900 px-5 py-2 md:px-10 md:py-3 md:text-lg text-gray-100"
        @click="handleError"
      >
        Ir para o início
      </button>
    </div>
    <div class="flex items-center justify-center p-10 md:p-0">
      <img
        src="/transistor-meditating-man-sitting-on-a-cloud-of-thoughts.gif"
        alt="Meditating Man Sitting On A Cloud"
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

<style></style>
