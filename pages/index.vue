<script lang="ts" setup>
useHead({
  title: "Acessível, escalável e autossustentável",
});
</script>

<template>
  <div class="bg-gray-300 p-6 py-40 md:px-8">
    <div class="mx-auto grid max-w-6xl grid-cols-3 items-center gap-20">
      <div class="col-span-2">
        <h1 class="font-racing text-4xl lg:text-7xl">
          Acessível<span class="font-semibold text-red-600">,</span> escalável
          <span class="font-semibold text-red-600">&</span> autossustentável.
        </h1>
        <p class="mt-8 text-lg lg:text-xl">
          O <strong>quila</strong> é um humano que desenvolve soluções digitais, acredita que a tecnologia
          é uma ferramenta que pode transformar o estilo de vida das pessoas.
        </p>
        <nuxt-link
          class="mt-10 border block w-full lg:w-60 rounded-lg border-b-4 border-l-4 border-red-700 bg-red-500 py-3 text-lg font-semibold text-red-100 active:translate-y-1 active:border-red-500 active:bg-red-600 active:text-red-300"
          to="/como-ser-um-programador-melhor"
        >
          <marquee
            direction="left"
            behavior="scroll"
            scrollamount="4"
            class="block"
          >
            Sou um botão de ação feito para chamar sua atenção e talvez te
            vender algo. Clique em mim ou pare de olhar!
          </marquee>
        </nuxt-link>
      </div>
      <img
        src="/transistor-flying-red-and-blue-stars.gif"
        alt="Imagem"
        class="h-[162px] w-[89px] object-contain hidden lg:block"
      />
    </div>
  </div>
</template>
