<script setup lang="ts">
useSeoMeta({
  title: "Posts",
});

defineOgImage({
  props: {
    description: "Diretório de pesquisa, estudos e artigos do Quila.",
  },
});
</script>

<template>
  <div>
    <la-page-title>Blog</la-page-title>
    <p>
      Não sou de escrever muito, mas quando escrevo, escrevo muito. Aqui você
      encontra meus artigos, estudos e pesquisas.
    </p>
  </div>
</template>
