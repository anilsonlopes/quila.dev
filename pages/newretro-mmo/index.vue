  <template>
    <div class="h-screen grid grid-rows-2">
      <div class="bg-red-700"></div>
      <div class="bg-red-500 px-2">
        <div class="grid grid-cols-10 gap-3">
          <div class="col-span-2 border bg-black p-3 rounded-lg grid gap-3">
            <button
              v-for="menuItem in state.menu"
              class="bg-gray-800 text-gray-100 rounded-md py-2 hover:bg-gray-700"
            >
              {{ menuItem }}
            </button>
          </div>
          <div class="col-span-8 grid gap-3">
            <div class="border p-3 bg-black rounded-lg text-gray-100 text-lg">
              {{ state.marquee }}
            </div>
            <div class="border p-1 bg-black rounded-lg grid grid-cols-12 gap-1">
              <button
                v-for="item in state.items"
                class="relative text-green-600 text-3xl border rounded-lg flex items-center justify-center flex-col"
              >
                <Icon :name="item.icon" />
                <span
                  class="absolute top-0 right-0 text-sm text-gray-100 bg-gray-600 p-1 leading-none rounded-tr-lg rounded-bl-md"
                >
                  {{ item.count }}
                </span>
                <span
                  class="overflow-hidden absolute inset-x bottom-0 bg-gray-800 h-2 w-full rounded-b-lg"
                  :class="colorByDurability(item.durability)"
                >
                  <span
                    class="bg-current h-2 block"
                    :style="{ width: `${item.durability}%` }"
                  ></span>
                </span>
              </button>
            </div>
            <div class="border p-3 bg-black rounded-lg max-w-md"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
definePageMeta({
  layout: 'mmo',
})

useHead({
  title: 'NewRetro MMO'
})

const state = {
  menu: ["Attack", "Ability", "Item", "Escape"],
  marquee: "Select an action.",
  items: [
    {
      count: 1,
      icon: "game-icons:claw-hammer",
      durability: 65
    },
    {
      count: 1,
      icon: "game-icons:ak47u",
      durability: 32
    },
    {
      count: 3,
      icon: "game-icons:hexagonal-nut",
      durability: 100
    },
    {
      count: 0,
      icon: "game-icons:fishing-net",
      durability: 79
    }
  ],
  stats: {
    name: "Quila",
    life: 53,
    mana: 0
  }
}

function colorByDurability (durability: number) {
  const scale = ["text-red-600", "text-orange-500", "text-green-600"];
  const lower = durability >= 0 && durability <= 33;
  const medium = durability >= 33 && durability <= 66;
  const high = durability >= 66 && durability <= 100;
  if (lower) return scale[0]
  else if (medium) return scale[1]
  else if (high) return scale[2]
  else return 'text-pink-500'
}
</script>
