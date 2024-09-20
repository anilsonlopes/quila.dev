<script setup lang="ts"></script>

<template>
  <div class="container mx-auto mt-10">
    <div class="prose pb-10 dark:prose-invert">
      <ContentDoc :path="`/posts/${$route.params.slug}`" class="mt-10">
        <template v-slot="{ doc }">
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>
