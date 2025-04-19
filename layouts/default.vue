<template>
  <div class="flex min-h-screen flex-col bg-neutral-900 text-neutral-100">
    <div class="mx-auto w-full max-w-7xl">
      <la-header />
      <div class="py-10">
        <slot />
      </div>
      <la-footer />
    </div>
  </div>
</template>
