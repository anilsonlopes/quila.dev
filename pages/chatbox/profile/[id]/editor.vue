<template>
  <div class="grid h-screen grid-cols-3 divide-x">
    <div class="col-span-2 flex h-screen flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <chatbox-form-toolbar
          v-model:name="data.title"
          v-model:image="data.image"
        />
        <hr />
      </div>
      <hr />
      <div class="flex items-center border-t bg-white">
        <button
          @click="fillDemoData"
          class="flex h-12 items-center space-x-2 border-r bg-white px-4 text-xs font-medium text-slate-700"
        >
          <span> Adicionar dados de demonstração </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="flex h-12 items-center space-x-2 border-r bg-white px-4 text-xs font-medium text-slate-700"
        >
          <span> Salvar </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
      </div>
    </div>
    <chatbox-form-preview :data="data" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "chatbox",
});

const router = useRouter();
const data = ref({
  title: "",
  image: "",
});

const fillDemoData = () => {
  data.value = {
    title: "Chatbox",
    image:
      "data:image/png;base64,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",
  };
};

const publish = () => {
  localStorage.setItem("1", JSON.stringify(data.value));
};
</script>
