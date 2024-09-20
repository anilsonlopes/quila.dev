<template>
  <div
    class="flex min-h-screen flex-col bg-neutral-100 text-neutral-900 dark:bg-black dark:text-neutral-100"
  >
    <la-header />
    <div>
      <slot />
    </div>
    <la-footer />
  </div>
</template>
