<template>
  <div
    class="scrollbar-y fixed bottom-0 left-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white transition-all duration-300 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
  >
    <nav class="flex h-full w-full flex-col">
      <div class="flex items-center justify-between pl-7 pr-4 pt-4">
        <la-quila />

        <!-- Sidebar Toggle -->
        <div class="lg:hidden">
          <button
            type="button"
            class="inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md align-middle text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <svg
              class="h-4 w-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </svg>
            <span class="sr-only">Sidebar</span>
          </button>
        </div>
        <!-- End Sidebar Toggle -->
      </div>

      <div class="h-full">
        <!-- List -->
        <ul class="space-y-1.5 p-4">
          <li>
            <a
              class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-gray-100"
              href="javascript:;"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 2C8.47339 2 8.85714 2.38376 8.85714 2.85714V7.14286L13.1429 7.14286C13.6162 7.14286 14 7.52661 14 8C14 8.47339 13.6162 8.85714 13.1429 8.85714L8.85714 8.85715V13.1429C8.85714 13.6162 8.47339 14 8 14C7.52661 14 7.14286 13.6162 7.14286 13.1429V8.85715L2.85714 8.85715C2.38376 8.85715 2 8.4734 2 8.00001C2 7.52662 2.38376 7.14287 2.85714 7.14287L7.14286 7.14286V2.85714C7.14286 2.38376 7.52661 2 8 2Z"
                  fill="currentColor"
                />
              </svg>
              Novo chat
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-gray-100"
              href="javascript:;"
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
                  d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                />
                <path
                  d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                />
              </svg>
              Salvar conversa
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-gray-100"
              href="javascript:;"
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
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                />
              </svg>
              FAQ
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-gray-100"
              href="javascript:;"
            >
              <svg
                class="h-3.5 w-3.5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
                />
              </svg>
              <span
                class="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent"
              >
                Atualizar plano
              </span>
            </a>
          </li>
        </ul>
        <!-- End List -->
      </div>

      <div class="mt-auto">
        <div class="px-7 py-2.5">
          <p class="inline-flex items-center gap-x-2 text-xs text-green-600">
            <span class="block h-1.5 w-1.5 rounded-full bg-green-600"></span>
            23 pessoas online
          </p>
        </div>

        <div class="border-t border-gray-200 p-4">
          <a
            class="flex items-center justify-between gap-x-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-gray-100"
            href="javascript:;"
          >
            Login
            <svg
              class="h-3.5 w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
