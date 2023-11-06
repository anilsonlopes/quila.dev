<script setup lang="ts">
const show = ref(false);
const route = useRoute();

onMounted(() => {
  const subscribeStorage = localStorage.getItem("quila.dev-newsletter");

  if (route.name !== "news" && !subscribeStorage) {
    show.value = true;
  }
});

const close = () => {
  show.value = false;
  localStorage.setItem("quila.dev-newsletter", "true");
};
</script>

<template>
  <div v-if="show" class="pt-10">
    <div
      class="fixed inset-x-0 bottom-0 bg-gray-300 p-5"
      style="box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2)"
    >
      <div class="mx-auto flex max-w-6xl items-center space-x-5">
        <Icon
          name="material-symbols:alternate-email"
          class="flex-none text-3xl text-red-500"
        />
        <div class="flex-1 font-semibold text-gray-700">
          Vamos manter contato. Receba as últimas notícias na sua caixa de
          entrada.
        </div>
        <nuxt-link
          class="rounded bg-blue-600 px-5 py-2 text-white"
          :to="{ name: 'newsletter' }"
          @click="close"
        >
          Inscrever-se
        </nuxt-link>
        <button
          type="button"
          class="rounded px-5 py-2 text-gray-700 hover:shadow"
          @click="close"
        >
          Não, obrigado
        </button>
      </div>
    </div>
  </div>
</template>
