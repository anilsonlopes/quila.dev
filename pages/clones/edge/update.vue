<script lang="ts" setup>
definePageMeta({
  layout: "edge",
});

const navigations = [
  {
    text: "Pin sites",
    to: "/edge/update/pin-sites",
  },
  {
    text: "Autofill",
    to: "/edge/update/autofill",
  },
  {
    text: "Screenshot",
    to: "/edge/update/screeshot",
  },
  {
    text: "Workspaces",
    to: "/edge/update/workspace",
  },
  {
    text: "Wallet",
    to: "/edge/update/wallet",
  },
  {
    text: "Split screen",
    to: "/edge/update/split-screen",
  },
  {
    text: "Get started",
    to: "/edge/update/get-started",
  },
];
</script>

<template>
  <div class="flex h-full flex-col">
    <NuxtPage />
    <div>
      <div
        class="mx-auto flex w-full max-w-6xl items-center justify-between py-5"
      >
        <div class="flex items-center space-x-3">
          <div class="h-6 w-6 rounded-full">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/logos/5a74283229e24d0ca59fb94ed941c3a0.png"
              alt="Edge's Logo"
              class="object-cover"
            />
          </div>
          <nuxt-link to="/edge/update" class="font-semibold text-gray-900">
            Here's what's new in Microsoft Edge
          </nuxt-link>
        </div>
        <div class="flex items-center text-gray-900">
          <div class="flex space-x-3">
            <nuxt-link
              v-for="navigation in navigations"
              class="navigation-item border-t-2 pt-1 border-transparent text-sm transition-colors duration-300"
              :to="navigation.to"
            >
              {{ navigation.text }}
            </nuxt-link>
          </div>
          <div class="relative ml-10 flex">
            <input
              type="text"
              class="w-[260px] rounded-full border border-black py-1 pl-3 placeholder:text-sm placeholder:text-gray-400"
              placeholder="Search the web"
            />
            <button
              class="absolute right-0 top-0 h-full rounded-r-full bg-black px-3 hover:bg-blue-700"
            >
              <Icon
                name="fluent:search-16-regular"
                class="text-xl text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div
        class="mx-auto flex max-w-6xl justify-end space-x-5 py-2 text-xs text-gray-700"
      >
        <nuxt-link to="/">Your Privacy Choices</nuxt-link>
        <nuxt-link to="/">Privacy</nuxt-link>
        <nuxt-link to="/">Manage cookies</nuxt-link>
        <span>&copy; Microsoft 2024</span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.navigation-item.router-link-exact-active {
  @apply border-black;
}
</style>
