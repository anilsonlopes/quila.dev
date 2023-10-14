<script lang="ts" setup>
definePageMeta({
  layout: "chatbox",
});
</script>

<template>
  <chatbox-sidebar />

  <div class="relative h-screen w-full lg:pl-64">
    <div class="py-10 lg:py-14">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
          Bem-vindo ao Chatbox
        </h1>
        <p class="mt-3 text-gray-600">Seu copiloto alimentado por IA para a web</p>
      </div>

      <ul class="mt-16 min-h-screen space-y-8">
        <chatbox-bubble avatar="https://0.gravatar.com/avatar/3505cfd8328becf7f55889e22af0c52f8dd9cc82c706d070074739508505b976?size=128">
          <h2 class="font-medium text-gray-800">Como posso te ajudar?</h2>
          <div class="space-y-1.5">
            <p class="mb-1.5 text-sm text-gray-800">
              Você pode fazer perguntas como:
            </p>
            <ul class="list-outside list-disc space-y-1.5 pl-3.5">
              <li class="text-sm text-gray-800">O que é o chatbox?</li>

              <li class="text-sm text-gray-800">
                Mas afinal quem é quila?
              </li>

              <li class="text-sm text-gray-800">Existe uma versão PRO?</li>
            </ul>
          </div>
        </chatbox-bubble>

        <chatbox-bubble initials="U">
          <p class="text-gray-800">quem é quila?</p>
        </chatbox-bubble>
      </ul>
    </div>

    <chatbox-input-ask />
  </div>
</template>
