<script setup lang="ts">
defineOgImage({
  props: {
    title: "Como ser um programador melhor",
    description:
      "Não é preciso ser Sherlock Holmes para descobrir que bons programadores escrevem bons códigos.",
  },
});
</script>

<template>
  <div class="container mx-auto mt-10">
    <div class="grid grid-cols-2 gap-10">
      <video
        poster="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="sticky top-0 aspect-video w-full rounded object-cover"
        src="/vidz/sample-video.mp4"
        controls
      />
      <div class="prose pb-10 dark:prose-invert">
        <content-doc path="/como-ser-um-programador-melhor" />
      </div>
    </div>
  </div>
</template>
