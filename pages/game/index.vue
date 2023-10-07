<template>
  <div class="grid h-screen grid-rows-2">
    <div class="bg-red-700"></div>
    <div class="bg-red-500 p-4">
      <div class="grid grid-cols-10 gap-3">
        <div
          class="col-span-3 grid gap-3 rounded border border-black bg-gray-200 p-3"
          :style="{ boxShadow: '4px 5px 0 black' }"
        >
          <GameUiMenuButton
            v-for="menuItem in state.menu"
            :disabled="menuItem.disabled"
            @click="menuItem.handler"
          >
            {{ menuItem.label }}
          </GameUiMenuButton>
        </div>
        <div class="col-span-7 grid gap-3">
          <div
            class="rounded border border-black bg-gray-200 p-3 text-lg text-gray-700"
            :style="{ boxShadow: '4px 5px 0 black' }"
          >
            {{ state.marquee }}
          </div>
          <div
            class="grid grid-cols-6 gap-1 rounded border border-black bg-gray-200 p-1"
            :style="{ boxShadow: '4px 5px 0 black' }"
          >
            <GameUiItemsButton v-for="item in state.items" v-bind="item" />
          </div>
          <div
            class="flex max-w-xl items-center space-x-3 rounded border border-black bg-gray-200 p-3"
            :style="{ boxShadow: '4px 5px 0 black' }"
          >
            <div
              class="h-10 w-10 flex-none overflow-hidden rounded-full bg-black"
              :style="{ boxShadow: '1px 1px 0 2px black' }"
            >
              <img :src="avatarByLife" alt="avatar" />
            </div>
            <div class="w-full">
              <div class="font-bold">
                {{ state.stats.name }}
              </div>
              <div
                class="mt-1 flex h-3 items-center rounded border border-black bg-red-100 px-px"
              >
                <div
                  class="h-2 rounded bg-red-500"
                  :style="{ width: `${state.stats.life}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "mmo",
});

useHead({
  title: "NewRetro MMO",
});

type MenuItem = {
  handler: Function;
  label: string;
  disabled?: boolean;
};

type Item = {
  count: number;
  icon: string;
  selected: boolean;
};

const handlers = {
  attack() {
    console.log("attack");
    const itemSelected = state.items.find((item) => item.selected);

    if (!itemSelected) {
      state.marquee = "Selecione um item para atacar.";
      return;
    }
  },

  skills() {
    console.log("mostrar habilidades");
  },

  items() {
    console.log("mostrar inventário");
  },

  escape() {
    console.log("sair da batalha");
  },
};

const state = {
  menu: [
    {
      handler: handlers.attack,
      label: "Atacar",
      disabled: false,
    },
    { handler: handlers.skills, label: "Habilidades", disabled: true },
    { handler: handlers.items, label: "Itens", disabled: true },
    { handler: handlers.escape, label: "Escapar", disabled: false },
  ] as MenuItem[],
  marquee: "Selecione uma opção.",
  items: [
    {
      count: 1,
      icon: "game-icons:ghost",
      selected: true,
    },
    {
      count: 3,
      icon: "game-icons:striking-balls",
      selected: false,
    },
    {
      count: 0,
      icon: "game-icons:fishing-net",
      selected: false,
    },
    {
      count: -1,
      icon: "ion:ios-plus-empty",
      selected: false,
    },
    {
      count: -1,
      icon: "ion:ios-plus-empty",
      selected: false,
    },
    {
      count: -1,
      icon: "ion:ios-plus-empty",
      selected: false,
    },
  ] as Item[],
  stats: {
    name: "Alexander Ghostfield",
    life: 80,
  },
};

const avatarByLife = computed(() => {
  const avatar = [
    "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Max",
    "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Boots&eyebrows=variant01,variant02,variant03,variant04,variant05,variant06,variant07,variant08,variant09,variant10,variant11,variant12,variant13,variant15,variant14",
    "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Pepper&flip=true",
  ];
  const lower = state.stats.life >= 0 && state.stats.life <= 33;
  const medium = state.stats.life >= 33 && state.stats.life <= 66;
  const high = state.stats.life >= 66 && state.stats.life <= 100;
  if (lower) return avatar[0];
  else if (medium) return avatar[1];
  else if (high) return avatar[2];
  else
    return "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Mittens";
});
</script>
