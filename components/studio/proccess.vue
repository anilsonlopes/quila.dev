<template>
  <div class="bg-gray-900 py-20">
    <div class="mx-auto grid max-w-6xl grid-cols-3 gap-10">
      <div class="col-span-2 text-gray-100">
        <h2 class="max-w-2xl text-5xl leading-snug">
          Empenhado em fornecer soluções criativas eficazes
        </h2>
        <p class="mt-8 text-lg">
          Nossa abordagem é baseada em um processo de quatro etapas que nos
          ajuda a criar soluções inovadoras e eficazes. Cada etapa é projetada
          para garantir que o produto final atenda às necessidades do cliente e
          exceda suas expectativas.
        </p>
        <p class="mt-5">
          É importante ter em mente que cada projeto é único e pode exigir um
          processo personalizado. O desenvolvimento acessível torna porssível se adaptar e
          ajustar o processo conforme necessário.
        </p>
      </div>
      <ul class="grid grid-cols-1 gap-5">
        <li
          v-for="solution in processes"
          class="flex flex-col rounded-lg border border-gray-100 p-4 text-gray-100 hover:bg-red-600"
        >
          <div class="flex items-center justify-between">
            <h4 class="text-xl font-semibold">
              {{ solution.title }}
            </h4>
            <Icon name="solar:add-circle-linear" class="text-xl" />
          </div>
          <p class="mt-4">
            {{ solution.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const processes = [
  {
    title: "01/ Ideação",
    description:
      "O processo inicia coletando detalhes e discussões com o cliente para entender a raiz da ideia e traçar objetivos.",
  },
  {
    title: "02/ Brainstorming",
    description:
      "Aqui, a equipe se reúne para discutir e criar soluções criativas. O plano é manter a mente aberta e não julgar as ideias.",
  },
  {
    title: "03/ Desenvolvimento",
    description:
      "Agora é hora de transformar as ideias em realidade. A equipe trabalha para criar um protótipo funcional.",
  },
  {
    title: "04/ Lançamento",
    description:
      "O produto é lançado e a equipe monitora o desempenho para garantir que tudo está funcionando corretamente.",
  },
];
</script>

<style></style>
