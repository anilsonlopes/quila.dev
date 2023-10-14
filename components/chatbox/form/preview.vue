<template>
  <div class="h-screen">
    <div
      class="h-[600px] w-[340px] overflow-y-auto rounded ring ring-slate-400 overflow-hidden"
    >
      <chatbox-template :acc="data" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
