<script setup lang="ts"></script>

<template>
  <div
    class="prose prose-invert prose-headings:no-underline prose-a:prose-headings:no-underline"
  >
    <ContentDoc :path="`/posts/${$route.params.slug}`" class="mt-10">
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    </ContentDoc>
  </div>
</template>
