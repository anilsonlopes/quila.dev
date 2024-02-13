<script lang="ts" setup>
useHead({
  title: "Acessível, escalável e autossustentável",
});

const userInput = ref({
  email: "",
});

const loading = ref(false);


const submitForm = async () => {
  loading.value = true
  const { data, error } = await useFetch("/api/news", {
    method: "POST",
    body: userInput.value,
  });
  loading.value = false
  if (error.value) {
    alert(error.value?.statusMessage)
  } else {
    alert(data.value?.message);
  }
};

</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <h1 class="font-racing text-3xl leading-tight lg:text-5xl">
        As últimas <span class="text-red-500">notícias do quila</span> em sua
        caixa de entrada.
      </h1>
      <form
        class="flex flex-col items-center rounded bg-white p-10 shadow lg:max-w-sm"
        @submit.prevent="submitForm"
      >
        <Icon
          name="material-symbols:alternate-email"
          class="flex-none text-5xl text-red-500"
        />
        <div class="mx-auto my-10 text-center text-lg text-gray-700">
          Cadastre-se para receber notícias e histórias semanais.
        </div>
        <input
          v-model="userInput.email"
          type="email"
          placeholder="Endereço eletrônico"
          class="w-full rounded border px-3 py-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          autocomplete="email"
          required
        />
        <div class="mt-10 text-center">
          <div class="text-sm text-gray-500">
            Não tenho interesse em te enviar spam e você pode cancelar a
            qualquer momento.
          </div>
          <button
            type="submit"
            class="mt-10 whitespace-nowrap rounded bg-blue-600 px-7 py-3 text-white"
            :class="{ 'opacity-50 pointer-events-none': loading }"
          >
            <span v-show="!loading">Inscrever-se</span>
            <Icon name="fluent:spinner-ios-20-filled" class="animate-spin text-xl" v-show="loading" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
