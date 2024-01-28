<template>
  <div class="mx-auto h-full max-w-6xl">
    <div class="grid h-full grid-cols-3 items-center gap-10">
      <div>
        <span
          class="inline-block rounded bg-yellow-500 px-2 py-1 text-xs font-medium uppercase text-gray-900"
        >
          New
        </span>
        <h1 class="mt-2 max-w-xs text-4xl text-gray-900">
          Pin your <span class="text-blue-500">favorite sites</span> to your
          taskbar
        </h1>
        <p class="mt-5 max-w-md">
          Pinning gives you quick access to the sites you love and use the most
          without even opening the browser. Select sites here to pin them to the
          Windows taskbar.
        </p>
        <nuxt-link
          class="mt-8 inline-block rounded-md bg-blue-700 px-14 py-2 font-medium text-white hover:bg-blue-600"
          to="/edge/update/autofill"
        >
          Next
        </nuxt-link>
      </div>
      <div class="col-span-2">
        <img
          src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/32fef8d7df4843cf97dad0eb2ed42676.png"
          alt="Edge"
          class="object-contain"
        />
      </div>
    </div>
  </div>
</template>
