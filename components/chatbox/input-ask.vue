<template>
  <footer class="sticky bottom-0 z-10 mx-auto max-w-4xl p-3 sm:py-6">
    <div class="mb-2 flex justify-end sm:mb-3 lg:hidden">
      <!-- Sidebar Toggle -->
      <button
        type="button"
        class="inline-flex items-center justify-center gap-1.5 rounded-md border bg-white p-2 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
        data-hs-overlay="#application-sidebar"
        aria-controls="application-sidebar"
        aria-label="Toggle navigation"
      >
        <svg
          class="h-3.5 w-3.5"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <span>Sidebar</span>
      </button>
      <!-- End Sidebar Toggle -->
    </div>

    <!-- Input -->
    <div class="relative">
      <textarea
        class="block w-full rounded-md border-gray-200 bg-gray-100 p-4 pb-12 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-400"
        placeholder="Ask me anything..."
      ></textarea>

      <!-- Toolbar -->
      <div
        class="absolute inset-x-px bottom-px rounded-b-md bg-gray-100 p-2 dark:bg-slate-800"
      >
        <div class="flex items-center justify-between">
          <!-- Button Group -->
          <div class="flex items-center">
            <!-- Mic Button -->
            <button
              type="button"
              class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-500 transition-all hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <!-- End Mic Button -->

            <!-- Attach Button -->
            <button
              type="button"
              class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-500 transition-all hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
                />
              </svg>
            </button>
            <!-- End Attach Button -->
          </div>
          <!-- End Button Group -->

          <!-- Button Group -->
          <div class="flex items-center gap-x-1">
            <!-- Mic Button -->
            <button
              type="button"
              class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-500 transition-all hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
                />
              </svg>
            </button>
            <!-- End Mic Button -->

            <!-- Send Button -->
            <button
              type="button"
              class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-blue-600 text-white transition-all hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                class="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
                />
              </svg>
            </button>
            <!-- End Send Button -->
          </div>
          <!-- End Button Group -->
        </div>
      </div>
      <!-- End Toolbar -->
    </div>
    <!-- End Input -->
  </footer>
</template>
