<script lang="ts" setup>
useHead({
  title: 'Acessível, escalável e autossustentável'
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="text-4xl font-racing font-normal text-gray-900 sm:text-6xl lg:text-7xl">
      Acessível, escalável & autossustentável.
    </h1>
    <ContentQuery path="/posts">
      <template #default="{ data }">
        <ul class="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="post of data" :key="post.name">
            <LaPostSummary :post="post" />
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>Nenhum post encontrado.</p>
      </template>
    </ContentQuery>
  </div>
</template>
