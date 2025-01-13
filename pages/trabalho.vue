import WorkItemMetaHead from './WorkItemMetaHead.vue'
<script lang="ts" setup>
import type { Experience } from "~/components/WorkItem/Root.vue";

const experiences: Experience[] = [
  {
    role: "Lead Front-end Engineer UI/UX",
    company: "Acesse seu Condomínio",
    place: "Maceió, Alagoas, Brasil",
    description: [
      "Responsável por traduzir conceitos inovadores em interfaces acessíveis e escaláveis. Conduzo a execução de projetos frontend desde a concepção até a entrega, garantindo a excelência técnica unida a experiências de usuário excepcionais.",
    ],
    startDate: "Abr 2020",
    endDate: "Presente",
    tags: [
      "UX",
      "Liderança",
      "Figma",
      "TypeScript",
      "VueJs",
      "Scrum",
      "NuxtJs",
      "TailwindCSS",
      "Flutter",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Doity",
    place: "Maceió, Alagoas, Brasil",
    description: [
      "Durante minha trajetória profissional, atuei na manutenção e desenvolvimento de interfaces utilizando CakePHP, aprimorando a funcionalidade e a experiência do usuário em sistemas existentes. ",
      "Fui responsável pelo desenvolvimento do novo site corporativo, empregando NuxtJS para entregar uma solução moderna, escalável e eficiente. Além disso, desempenhei o papel de principal desenvolvedor front-end na construção da plataforma de cursos online da empresa, o Doity Play, liderando a implementação de uma interface intuitiva e acessível que atende às necessidades dos usuários.",
    ],
    startDate: "Nov 2016",
    endDate: "Jun 2021",
    tags: [
      "VueJs",
      "NuxtJs",
      "TailwindCSS",
      "CakePHP",
      "Scrum",
      "UI/UX",
      "Git",
      "JavaScript",
      "JQuery",
      "CSS",
      "HTML5",
    ],
  },
];
</script>

<template>
  <div>
    <la-page-title>Trabalhos</la-page-title>
    <p>
      Minha experiência profissional é vasta e diversificada. Já trabalhei em
      diversas áreas. Atualmente, sou professor de programação e desenvolvimento
      web na Faculdade de Tecnologia de Quila (FTQ).
    </p>
    <ul class="mt-10 space-y-5">
      <WorkItemRoot v-for="experience in experiences" v-bind="experience" />
    </ul>
  </div>
</template>
