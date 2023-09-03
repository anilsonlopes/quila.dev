<template>
  <button class="flex max-w-md bg-gradient-to-r no-underline from-white py-1 rounded-lg border border-gray-200 px-4 hover:to-white transition-colors duration-100" @click="toBack">
    <Icon name="solar:arrow-left-broken" class="text-red-600 text-2xl" />
    <span class="inline-block text-gray-600 ml-4">
      Voltar
    </span>
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  fallback: {
    type: String,
    default: "/",
  },
})

const router = useRouter();

function toBack() {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push(props.fallback);
  }
}
</script>
