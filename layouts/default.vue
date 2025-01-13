<template>
  <div
    class="flex min-h-screen flex-col bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
  >
    <div class="mx-auto w-full max-w-3xl py-8">
      <la-header />
      <div class="py-10">
        <slot />
      </div>
      <la-footer />
    </div>
  </div>
</template>
