<template>
  <div class="grid h-screen grid-rows-4">
    <div class="row-span-3 bg-gray-200 p-4">
      <div class="board">
        <div
          v-for="(step, stepIndex) in steps"
          class="board-step flex flex-col items-center justify-center bg-gray-400"
          :class="`board-step--${stepIndex}`"
        >
          <div
            class="py-2 text-center font-racing text-xl font-semibold text-white"
          >
            {{ stepIndex }}
          </div>
          <div class="flex -space-x-2">
            <div v-for="player in step.players" class="flex-shrink-0">
              <img
                :src="avatars[player]"
                class="h-8 w-8 rounded-full ring-2 ring-black"
              />
            </div>
          </div>
        </div>
        <div
          class="board-step board-step--end flex flex-col items-center justify-center bg-gray-400"
        >
          <div v-for="icon in diceIcons">
            <Icon
              v-show="icon === diceIcons[currentDice]"
              :name="icon"
              class="text-7xl text-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-10 grid-rows-3 gap-4 bg-red-500 p-4 text-white">
      <div class="col-span-7 pt-3 text-xl">Anilson Lopes</div>
      <div class="col-span-7">
        <button
          v-show="!randomizing"
          type="button"
          @click="onClickRandomizeDice"
        >
          Jogar dados
        </button>
        <div v-show="randomizing">Jogando dados...</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.board {
  @apply grid h-full grid-cols-5 grid-rows-6 gap-1;
}

.board-step--0 {
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 2;
}
.board-step--1 {
  grid-row-start: 1;
  grid-column-start: 2;

  grid-row-end: 2;
  grid-column-end: 3;
}
.board-step--2 {
  grid-row-start: 1;
  grid-column-start: 3;

  grid-row-end: 2;
  grid-column-end: 4;
}
.board-step--3 {
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 2;
  grid-column-end: 5;
}
.board-step--4 {
  grid-row-start: 1;
  grid-column-start: 5;

  grid-row-end: 2;
  grid-column-end: 6;
}
.board-step--5 {
  grid-row-start: 2;
  grid-column-start: 5;

  grid-row-end: 3;
  grid-column-end: 6;
}
.board-step--6 {
  grid-row-start: 3;
  grid-column-start: 5;

  grid-row-end: 4;
  grid-column-end: 6;
}
.board-step--16 {
  grid-row-start: 3;
  grid-column-start: 1;

  grid-row-end: 4;
  grid-column-end: 2;
}
.board-step--17 {
  grid-row-start: 2;
  grid-column-start: 1;

  grid-row-end: 3;
  grid-column-end: 2;
}
.board-step--end {
  grid-row-start: 2;
  grid-column-start: 2;

  grid-row-end: 6;
  grid-column-end: 5;
}
.board-step--15 {
  grid-row-start: 4;
  grid-column-start: 1;

  grid-row-end: 5;
  grid-column-end: 2;
}
.board-step--7 {
  grid-row-start: 4;
  grid-column-start: 5;

  grid-row-end: 5;
  grid-column-end: 6;
}
.board-step--8 {
  grid-row-start: 5;
  grid-column-start: 5;

  grid-row-end: 6;
  grid-column-end: 6;
}
.board-step--14 {
  grid-row-start: 5;
  grid-column-start: 1;

  grid-row-end: 6;
  grid-column-end: 2;
}
.board-step--13 {
  grid-row-start: 6;
  grid-column-start: 1;

  grid-row-end: 7;
  grid-column-end: 2;
}
.board-step--12 {
  grid-row-start: 6;
  grid-column-start: 2;

  grid-row-end: 7;
  grid-column-end: 3;
}
.board-step--11 {
  grid-row-start: 6;
  grid-column-start: 3;

  grid-row-end: 7;
  grid-column-end: 4;
}
.board-step--10 {
  grid-row-start: 6;
  grid-column-start: 4;

  grid-row-end: 7;
  grid-column-end: 5;
}

.board-step--9 {
  grid-row-start: 6;
  grid-column-start: 5;

  grid-row-end: 7;
  grid-column-end: 6;
}
</style>

<script lang="ts" setup>
definePageMeta({
  layout: "game",
});

useHead({
  title: "NewRetro Board",
});

const avatars = [
  "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Max",
  "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Boots&eyebrows=variant01,variant02,variant03,variant04,variant05,variant06,variant07,variant08,variant09,variant10,variant11,variant12,variant13,variant15,variant14",
  "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Pepper&flip=true",
];

const steps = ref([
  {
    id: 1,
    players: [1],
  },
  {
    id: 2,
    players: [],
  },
  {
    id: 3,
    players: [],
  },
  {
    id: 4,
    players: [0],
  },
  {
    id: 5,
    players: [],
  },
  {
    id: 6,
    players: [],
  },
  {
    id: 7,
    players: [2],
  },
  {
    id: 8,
    players: [],
  },
  {
    id: 9,
    players: [],
  },
  {
    id: 10,
    players: [],
  },
  {
    id: 11,
    players: [],
  },
  {
    id: 12,
    players: [],
  },
  {
    id: 13,
    players: [],
  },
  {
    id: 14,
    players: [],
  },
  {
    id: 15,
    players: [],
  },
  {
    id: 16,
    players: [],
  },
  {
    id: 17,
    players: [],
  },
  {
    id: 18,
    players: [],
  },
]);

const diceIcons = [
  "game-icons:dice-target",
  "game-icons:inverted-dice-1",
  "game-icons:inverted-dice-2",
  "game-icons:inverted-dice-3",
  "game-icons:inverted-dice-4",
  "game-icons:inverted-dice-5",
  "game-icons:inverted-dice-6",
];

const templateMessage =
  "Crie uma pergunta no tema {themeName} com {alternativeCount} alternativas";

function renderTemplateMessage(message: string, props: Record<string, any>) {
  for (const [key, value] of Object.entries(props)) {
    message = message.replace(`{${key}}`, value);
  }
  return message;
}

const currentDice = ref(0);
const countRandomizeDice = ref(0);
const randomizing = ref(false);

async function randomizeDice() {
  randomizing.value = true;
  currentDice.value = Math.floor(Math.random() * 6) + 1;
  if (countRandomizeDice.value > 20) {
    randomizing.value = false;
    // fazer a pergunta
    // avançar apenas se acertar
    gotoNextStep();
  } else {
    countRandomizeDice.value++;
    setTimeout(randomizeDice, 100);
  }
}

function gotoNextStep() {
  // busca step onde está o player
  const currentStepIndex = steps.value.findIndex((step) =>
    step.players.includes(0),
  )!;

  // remove player do step atual
  steps.value[currentStepIndex].players = steps.value[
    currentStepIndex
  ].players.filter((player) => player !== 0);

  // adiciona player no novo step
  let nextStepIndex = currentStepIndex + currentDice.value;

  if (nextStepIndex >= steps.value.length) {
    nextStepIndex = nextStepIndex - steps.value.length;
  }

  steps.value[nextStepIndex].players.push(0);
}

function onClickRandomizeDice() {
  countRandomizeDice.value = 0;
  randomizeDice();
}
</script>
