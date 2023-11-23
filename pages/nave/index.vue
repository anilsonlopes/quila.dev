<template>
  <div class="p-5 flex flex-col">
    <h1 class="font-racing text-5xl mt-4 text-center">Vai de nave</h1>
    <p class="text-gray-700 text-lg text-center mt-2">Bem-vindo à revolução do transporte alternativo.</p>
    <img src="/flame-searching.gif" alt="Nave" class="mt-5" />
    <ul class="pl-4 mt-5 list-disc space-y-5 text-gray-700">
      <li>
        Vai de nave é o passaporte para uma jornada tranquila, segura e conveniente.
      </li>
      <li>
        Conectamos motoristas de van comprometidos com a excelência ao redor do universo, prontos para levá-lo aos destinos mais incríveis.
      </li>
    </ul>
    <h2 class="text-xl text-gray-800 mt-10 mb-3 font-semibold">Porque ir de nave?</h2>
    <ul class="space-y-8">
      <li v-for="feature in features">
        <NaveFeatureItem v-bind="feature" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "nave",
});

const features = [
  {
    icon: "✨",
    title: "Viagens confortáveis:",
    body: "Embarque em nossas naves espaciais modernas, projetadas para oferecer o máximo conforto durante toda a jornada.",
  },
  {
    icon: "🛣️",
    title: "Rotas intermunicipais eficientes:",
    body: "Navegue por rotas intermunicipais otimizadas, economizando tempo e garantindo chegadas pontuais.",
  },
  {
    icon: "🤝",
    title: "Motoristas de confiança:",
    body: "Nossa tripulação de motoristas é cuidadosamente selecionada, garantindo profissionalismo, segurança e um serviço excepcional.",
  },
  {
    icon: "🚌",
    title: "Conexão direta:",
    body: "Reduza a distância entre destinos com a facilidade de uma conexão direta entre motoristas de van qualificados e passageiros.",
  },
  {
    icon: "🍃",
    title: "Reservas simples:",
    body: "Faça suas reservas com facilidade através do nosso aplicativo intuitivo. A sua jornada começa com apenas alguns toques na tela.",
  },
  {
    icon: "🛸",
    title: "Pronto para decolar?",
    body: "Deixe a Vai de Nave ser o guia da sua próxima aventura intermunicipal. Junte-se a nós e experimente uma forma revolucionária de viajar. Seu destino está a apenas um clique de distância!",
  }
]
</script>
