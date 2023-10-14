<script setup>
const props = defineProps({
  avatar: {
    type: String,
    default: "",
  },
  initials: {
    type: String,
    default: "VC",
  },
});
</script>

<template>
  <li
    class="mx-auto flex max-w-4xl gap-x-2 px-4 py-2 sm:gap-x-4 sm:px-6 lg:px-8"
  >
    <div class="h-10 w-10 overflow-hidden rounded-full">
      <img
        v-if="avatar"
        class="object-fill"
        :src="avatar"
        alt="Image Description"
      />
      <span
        v-else
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900"
      >
        <span class="text-sm font-medium leading-none text-white">{{ initials }}</span>
      </span>
    </div>

    <div class="space-y-3">
      <slot />
    </div>
  </li>
</template>
