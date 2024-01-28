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
          <span class="text-blue-500">Save time</span> while filling out online
          forms
        </h1>
        <p class="mt-5 max-w-md">
          Losing your progress on an online form can be frustrating. When you
          fill forms online in Edge, Autofill can suggest your "last used"
          information, so you can save yourself time and continue right where
          you left off.
        </p>
        <div>
          <nuxt-link
            class="mt-8 inline-block rounded-md border-2 border-gray-900 px-5 py-1 text-sm text-black"
            to="/edge/update/autofill"
          >
            Lern more
          </nuxt-link>
        </div>
        <nuxt-link
          class="mt-10 inline-block rounded-md bg-blue-700 px-14 py-2 font-medium text-white hover:bg-blue-600"
          to="/edge/update/autofill"
        >
          Next
        </nuxt-link>
      </div>
      <div class="col-span-2">
        <div class="border border-gray-200 rounded-3xl bg-gray-300 p-2">
          <img
            src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/32fef8d7df4843cf97dad0eb2ed42676.png"
            alt="Edge"
            class="object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>
