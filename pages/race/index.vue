<template>
  <div id="app" class="grid h-screen grid-cols-6 gap-2 p-2">
    <div class="bubble col-span-3 bg-gray-500 px-8 py-5 md:col-span-3">
      <div class="text-xs font-semibold uppercase text-gray-700">Desafios</div>
      <div class="mt-1 text-sm text-white">Últimas conquistas</div>
      <ul class="mt-5 space-y-4">
        <li
          v-for="conquest in achievements"
          :key="conquest.title"
          class="flex items-start space-x-3"
        >
          <span class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <g opacity=".2">
                  <path
                    d="M4.62 8.496c-.217-.892.781-1.581 1.538-1.061l1.83 1.256a1 1 0 0 0 1.417-.298l1.244-2.016a1 1 0 0 1 1.702 0l1.244 2.016a1 1 0 0 0 1.417.298l1.83-1.256c.757-.52 1.755.169 1.538 1.06l-1.4 5.742a1 1 0 0 1-.971.763H6.99a1 1 0 0 1-.971-.763l-1.4-5.741Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M15.825 10.532a3 3 0 0 1-3.931-1.088l-.394-.638l-.394.638a3 3 0 0 1-3.93 1.088l.6 2.468h7.447l.602-2.468ZM6.158 7.435c-.757-.52-1.755.169-1.538 1.06l1.4 5.742a1 1 0 0 0 .97.763h9.018a1 1 0 0 0 .971-.763l1.4-5.741c.217-.892-.781-1.581-1.538-1.061l-1.83 1.256a1 1 0 0 1-1.417-.298L12.35 6.377a1 1 0 0 0-1.702 0L9.405 8.393a1 1 0 0 1-1.417.298l-1.83-1.256Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M12.5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM20 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M6.25 16.5a.75.75 0 0 1 .75-.75h8.737a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M5 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></path>
                </g>
                <path
                  fillRule="evenodd"
                  d="m14.896 13.818l1.515-5.766l-2.214 1.41a2 2 0 0 1-2.74-.578L10 6.695l-1.458 2.19a2 2 0 0 1-2.74.577L3.59 8.052l1.515 5.766h9.792Zm-10.77-6.61c-.767-.489-1.736.218-1.505 1.098l1.516 5.766a1 1 0 0 0 .967.746h9.792a1 1 0 0 0 .967-.746l1.516-5.766c.23-.88-.738-1.586-1.505-1.098l-2.214 1.41a1 1 0 0 1-1.37-.288l-1.458-2.19a1 1 0 0 0-1.664 0L7.71 8.33a1 1 0 0 1-1.37.289l-2.214-1.41Z"
                  clipRule="evenodd"
                ></path>
                <path
                  d="M10.944 3.945a.945.945 0 1 1-1.89.002a.945.945 0 0 1 1.89-.002ZM18.5 5.836a.945.945 0 1 1-1.89.001a.945.945 0 0 1 1.89 0Zm-15.111 0a.945.945 0 1 1-1.89.001a.945.945 0 0 1 1.89 0Z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M5.25 16a.5.5 0 0 1 .5-.5h8.737a.5.5 0 1 1 0 1H5.75a.5.5 0 0 1-.5-.5Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          </span>
          <div>
            <div class="text-sm font-semibold text-gray-100">
              {{ conquest.title }}
            </div>
            <div class="text-sm text-gray-400">
              {{ conquest.description }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="bubble col-span-3 flex flex-col items-center justify-center bg-gradient-to-tr from-red-800 to-red-500 px-8 py-5 md:col-span-3"
    >
      <div
        class="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-red-900 bg-black"
      >
        <img
          src="https://www.gravatar.com/avatar/2eacad978796e7f39b727d12bf190cc8"
          alt="Foto do usuário"
          class="block w-full"
        />
      </div>
      <div class="mt-1 text-center font-semibold text-gray-300 md:mt-3">
        Anilson Lopes
      </div>
      <div class="text-center font-mono font-thin text-gray-100">@quilamcz</div>
    </div>
    <div class="bubble col-span-6 bg-gray-100">
      <audio
        src="https://download.samplelib.com/mp3/sample-15s.mp3"
        controls
        class="block w-full"
      >
        O seu navegador não suporta o elemento <code>audio</code>.
      </audio>
    </div>
    <div
      class="bubble col-span-6 flex flex-col items-center justify-end bg-gradient-to-tr from-blue-900 to-blue-700 px-8 py-5 bg-cover"
    >
      <div
        class="mb-20 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-5xl text-red-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"
          ></path>
        </svg>
      </div>
      <div
        class="mt-5 flex w-full items-center justify-between border-t border-blue-300 pt-5"
      >
        <div class="font-semibold uppercase text-white">
          <div class="text-3xl font-bold">100k</div>
          <div class="uppercase text-white">Connected users</div>
        </div>
        <div class="font-semibold uppercase text-white">
          <div class="text-3xl font-bold">24/7</div>
          <div class="uppercase text-white">Level up</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bubble {
  @apply rounded-xl;
}
</style>

<script lang="ts" setup>
definePageMeta({
  layout: "race",
});

const achievements = [
  {
    title: "No limite",
    description: "Passe entre dois radares no limite máximo de velocidade",
  },
  {
    title: "Deslize total no pontal",
    description: "Faça um drift em todo retorno do viaduto",
  },
];
</script>
