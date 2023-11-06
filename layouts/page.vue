<template>
  <div class="bg-gray-200 min-h-screen">
    <la-header />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <slot />
      </div>
    </div>
    <la-cta-newsletter />
  </div>
</template>
