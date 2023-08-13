<script lang="ts" setup></script>

<template>
  <div
    class="bubble relative col-span-3 flex items-end bg-cover bg-center p-5 md:col-span-3"
    style="
      background-image: url('https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    "
  >
    <div class="bubble--header">
      <nuxt-link to="/race/criar-conta" class="bubble--btn">
        Como funciona
      </nuxt-link>
      <nuxt-link to="https://instagram.com/quilamcz" class="bubble--btn-circle">
        <Icon name="ph:instagram-logo-light" />
      </nuxt-link>
    </div>
    <div class="bubble--backdrop">
      Colecione conquistas enquanto interage com o mundo a sua volta.
    </div>
  </div>
</template>

<style scoped></style>
