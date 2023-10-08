<template>
  <div class="flex h-screen flex-col">
    <la-header />
    <div class="board">
      <div
        v-for="(step, stepIndex) in steps"
        class="board-step flex flex-col items-center justify-center bg-gray-500"
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
        class="board-step board-step--end flex flex-col items-center justify-center space-y-3 bg-gray-400"
      >
        <div>
          <div v-for="icon in diceIcons">
            <Icon
              v-show="icon === diceIcons[currentDice]"
              :name="icon"
              class="text-7xl text-gray-900"
              :class="{
                'pointer-events-none animate-pulse': randomizing,
                'pointer-events-none text-red-500': haveQuestion,
              }"
              @click="requestQuestion"
            />
          </div>
        </div>
        <div v-show="haveQuestion" class="px-10 space-y-3">
          <div class="rounded bg-red-500 px-2 py-1 text-xs text-white inline-block capitalize">
            {{ currentQuestion.tema }}
          </div>
          <div class="text-xl text-gray-800">
            {{ currentQuestion.pergunta }}
          </div>
          <ul class="list-inside list-decimal space-y-1 text-gray-700">
            <li
              v-for="(
                alternative, alternativeIndex
              ) in currentQuestion.alternativas"
              role="button"
              class="hover:text-black"
              @click="selectAlternative(alternativeIndex)"
            >
              {{ alternative }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.board {
  @apply grid h-full grid-cols-5 grid-rows-6 gap-1 bg-gray-400 p-10;
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
import { QuestionResponse } from "~/server/api/gpt";

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
    players: [1, 0, 2],
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
    players: [],
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
    players: [],
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

const currentDice = ref(0);
const randomizing = ref(false);
const loading = ref(false);

const currentQuestion = ref<QuestionResponse>({
  tema: "",
  pergunta: "",
  alternativas: [],
  resposta_correta: 0,
});

async function requestQuestion() {
  loading.value = true

  randomizeDice();
  
  const r = await useFetch("/api/gpt", { params: { tema: "filme" } });
  currentQuestion.value = JSON.parse(String(r.data.value));

  loading.value = false
}

function randomizeDice() {
  randomizing.value = true;
  currentDice.value = Math.floor(Math.random() * 6) + 1;

  if (loading.value) {
    setTimeout(randomizeDice, 100);
  } else {
    randomizing.value = false;
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

  if (nextStepIndex > steps.value.length) {
    nextStepIndex = steps.value.length;
  }

  steps.value[nextStepIndex].players.push(0);
}

function gotoPreviousStep() {
  // busca step onde está o player
  const currentStepIndex = steps.value.findIndex((step) =>
    step.players.includes(0),
  )!;

  // remove player do step atual
  steps.value[currentStepIndex].players = steps.value[
    currentStepIndex
  ].players.filter((player) => player !== 0);

  // adiciona player no novo step
  let previousStepIndex = currentStepIndex - currentDice.value;

  if (previousStepIndex < 0) {
    previousStepIndex = 0;
  }

  steps.value[previousStepIndex].players.push(0);
}

function selectAlternative(alternativeIndex: number) {
  currentQuestion.value.pergunta = "";

  if (alternativeIndex === currentQuestion.value.resposta_correta) {
    gotoNextStep();
  } else {
    gotoPreviousStep();
  }
}

const haveQuestion = computed(() => {
  return currentQuestion.value.pergunta !== "";
});
</script>
