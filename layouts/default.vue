
<template>
  <div class="flex min-h-screen flex-col bg-gray-300">
    <la-header />
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <slot />
    </div>
    <la-cta-newsletter />
  </div>
</template>
