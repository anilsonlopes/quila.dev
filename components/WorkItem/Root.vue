<template>
  <div class="space-y-2 border border-neutral-300 p-5 dark:border-neutral-700">
    <WorkItemTop>
      <template #place>{{ place }}</template>
      <template #date> {{ startDate }} - {{ endDate }} </template>
    </WorkItemTop>
    <WorkItemHead :role="role" :company="company" />
    <WorkItemBody>
      <p v-for="p in description">
        {{ p }}
      </p>
    </WorkItemBody>
    <WorkItemTags :tags="tags" />
  </div>
</template>

<script lang="ts" setup>
export type Experience = {
  role: string;
  company: string;
  place: string;
  startDate: string;
  endDate?: string;
  description: string[];
  tags: string[];
};

defineProps<Experience>();
</script>

<style></style>
