<template>
  <div class="bg-gray-900 py-20">
    <div class="mx-auto max-w-6xl">
      <h2
        class="mx-auto max-w-2xl text-center text-5xl leading-snug text-gray-100"
      >
        Empenhado em fornecer soluções criativas eficazes
      </h2>
      <ul class="mt-20 grid grid-cols-2 gap-5">
        <li
          v-for="solution in solutions"
          class="flex flex-col rounded-lg border border-gray-100 p-4 text-gray-100 hover:bg-red-600"
        >
          <Icon :name="solution.icon" class="text-5xl" />
          <h3 class="mt-5 text-3xl font-semibold">
            {{ solution.title }}
          </h3>
          <p class="mt-8">
            {{ solution.description }}
          </p>
          <Icon name="solar:arrow-right-linear" class="mt-8 text-5xl" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Solution = {
  title: string;
  description: string;
  icon: string;
};

const solutions: Solution[] = [
  {
    title: "UI/UX Design",
    description:
      "Foco em fornece interface (UI) e experiência (UX) com melhoria de usabilidade e acessibilidade em produtos e aplicações digitais.",
    icon: "solar:pallete-2-linear",
  },
  {
    title: "Sound Design",
    description:
      "Criação de trilhas sonoras e efeitos sonoros para produtos digitais, com foco em imersão e experiência do usuário.",
    icon: "solar:speaker-minimalistic-outline",
  },
  {
    title: "Desenvolvedor Web",
    description:
      "Desenvolvimento de aplicações web com tecnologias modernas e escaláveis, com foco em performance e segurança.",
    icon: "solar:window-frame-linear",
  },
  {
    title: "Motion Graphics",
    description:
      "Criação de animações e vídeos para produtos digitais, com foco em engajamento e experiência do usuário.",
    icon: "solar:running-round-linear",
  },
];
</script>

<style></style>
