<template>
  <div class="p-5">
    <div class="mb-2 text-xl font-bold text-gray-900">Atividade</div>
    <ul class="divide-y divide-gray-400">
      <li v-for="item in items" class="py-3">
        <div class="flex items-center">
          <div class="w-16 h-16 bg-gray-300 mr-4 rounded-md flex items-center justify-center">
            <Icon name="material-symbols-light:directions-bus-sharp" class="text-gray-500 text-5xl" />
          </div>
          <div class="flex-1">
            <div class="font-semibold text-gray-500">
              {{  item.line }}
            </div>
            <div class="font-medium uppercase text-gray-700">
              {{ item.name }}
            </div>
            <div class="text-gray-500">
              {{ item.date }}
            </div>
          </div>
          <nuxt-link
            class="rounded bg-gray-300 px-2 py-1 text-sm text-gray-700 active:bg-gray-500"
            :to="{ name: 'nave-reportar-id', params: { id: item.id } }"
          >
            Reportar
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "nave",
});

const items = [
  {
    id: 1,
    line: '2134',
    name: 'Maceió',
    date: '10 de out - 07:13 AM',
  },
  {
    id: 2,
    line: '4567',
    name: 'Marechal',
    date: '21 de out - 18:30 PM',
  },
  {
    id: 3,
    line: '7890',
    name: 'Maceió',
    date: '22 de out - 07:15 AM',
  },
  {
    id: 4,
    line: '2009',
    name: 'Marechal',
    date: '23 de out - 18:29 PM',
  },
  {
    id: 5,
    line: '5678',
    name: 'Maceió',
    date: '24 de out - 07:45 AM',
  },
  {
    id: 6,
    line: '9012',
    name: 'Marechal',
    date: '25 de out - 19:00 PM',
  },
  {
    id: 7,
    line: '3456',
    name: 'Maceió',
    date: '26 de out - 06:54 AM',
  },
  {
    id: 8,
    line: '7890',
    name: 'Marechal',
    date: '27 de out - 18:32 PM',
  },
  {
    id: 9,
    line: '2009',
    name: 'Maceió',
    date: '28 de out - 07:29 AM',
  },
  {
    id: 10,
    line: '5678',
    name: 'Marechal',
    date: '29 de out - 18:30 PM',
  },
];


</script>
