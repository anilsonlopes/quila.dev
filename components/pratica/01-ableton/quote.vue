<template>
  <section>
    <div class="mx-auto max-w-3xl py-10">
      <div class="text-2xl">
        <slot />
      </div>
      <div class="mt-4">
        <slot name="sub" />
      </div>
    </div>
  </section>
</template>
