<script lang="ts" setup>
useHead({
  title: "Acessível, escalável e autossustentável",
});
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <div class="grid grid-cols-2 items-center gap-10">
      <h1 class="font-racing text-5xl leading-tight">
        As últimas <span class="text-red-500">notícias do quila</span> em sua
        caixa de entrada.
      </h1>
      <form class="max-w-sm rounded bg-white p-10 shadow flex flex-col items-center">
        <Icon
          name="material-symbols:alternate-email"
          class="flex-none text-5xl text-red-500"
        />
        <div class="mx-auto my-10 text-center text-lg text-gray-700">
          Cadastre-se para receber notícias e histórias semanais.
        </div>
        <input
          type="email"
          placeholder="Endereço eletrônico"
          class="w-full rounded border px-3 py-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <div class="mt-10 text-center">
          <div class="text-sm text-gray-500">
            Não tenho interesse em te enviar spam e você pode cancelar a
            qualquer momento.
          </div>
          <button
            type="submit"
            class="mt-10 whitespace-nowrap rounded bg-blue-600 px-7 py-3 text-white"
          >
            Inscrever-se
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
