<template>
  <div class="flex min-h-screen flex-col bg-black text-gray-100">
    <la-header />
    <div class="mx-auto max-w-[1440px] px-10">
      <slot />
    </div>
    <footer class="py-10"></footer>
  </div>
</template>
