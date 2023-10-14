<script lang="ts" setup>
useHead({
  title: "Chatbox - Profile",
});

definePageMeta({
  layout: "chatbox",
});

const route = useRoute();
const router = useRouter();
const decodedData = ref({
  name: "",
  image: "",
});

useHead({
  title: `${decodedData.value.name} - Chatbox`,
});

onMounted(() => {
  const id = route.params.id as string;
  const dataStorage = localStorage.getItem(id);

  if (!id || !dataStorage) {
    router.replace("/chatbox");
    return;
  }

  decodedData.value = JSON.parse(dataStorage);
});
</script>

<template>
  <div>
    <chatbox-template v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <chatbox-loading class="h-5 w-5" />
    </div>
  </div>
</template>
