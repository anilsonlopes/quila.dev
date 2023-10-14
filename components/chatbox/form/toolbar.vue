<template>
  <chatbox-form-section title="Marca" description="Personalização do cabeçalho">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 flex-grow sm:col-span-3">
          <label
            for="photo-url"
            class="block text-sm font-medium text-gray-700"
          >
            Ícone
          </label>
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </chatbox-form-section>
</template>

<script setup>
const props = defineProps(["name", "image"]);
</script>
