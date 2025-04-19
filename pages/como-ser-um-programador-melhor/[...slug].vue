<script setup lang="ts"></script>

<template>
  <div class="prose dark:prose-invert">
    <ContentDoc
      :path="`/como-ser-um-programador-melhor/${$route.params.slug}`"
      class="mt-10"
    >
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    </ContentDoc>
  </div>
</template>
