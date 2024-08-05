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
  <div class="prose pb-10">
    <content-doc path="/como-ser-um-programador-melhor" />
  </div>
</template>
