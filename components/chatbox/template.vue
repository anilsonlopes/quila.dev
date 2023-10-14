<template>
  <div
    class="flex flex-auto flex-shrink-0 flex-col overflow-hidden bg-gray-100"
  >
    <div class="w-full">
      <div class="z-10 mb-4 flex justify-between bg-white py-1">
        <div class="flex items-center">
          <img
            alt="profile picture"
            loading="lazy"
            width="35"
            height="35"
            decoding="async"
            data-nimg="1"
            class="m-1 mr-2 rounded-full"
            style="color: transparent"
            :src="acc.image"
          />
          <h1 class="text-lg font-bold text-zinc-700">{{ acc.name }}</h1>
        </div>
        <div class="flex items-center justify-center">
          <button class="ml-3 py-3 text-zinc-700 hover:text-zinc-600">
            <Icon name="solar:close-circle-outline" />
          </button>
        </div>
      </div>
    </div>
    <div class="h-full overflow-auto">
      <div class="h-full">
        <div class="px-2">
          <div>
            <div class="mr-8 flex justify-start">
              <div
                class="mb-3 max-w-prose overflow-auto rounded-lg bg-gray-300 px-4 py-3"
              >
                <div class="flex flex-col items-start gap-4 break-words">
                  <div
                    class="prose w-full break-words text-left text-inherit dark:prose-invert"
                  >
                    <p>👋 Oi! Eu sou ChatboxAI, pergunte-me qualquer coisa sobre Chatbox!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mr-8 flex justify-start">
              <div
                class="mb-3 max-w-prose overflow-auto rounded-lg bg-gray-300 px-4 py-3"
              >
                <div class="flex flex-col items-start gap-4 break-words">
                  <div
                    class="prose w-full break-words text-left text-inherit dark:prose-invert"
                  >
                    <p>
                      By the way, you can create a chatbot like me for your
                      website! 😮
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-8 flex justify-end">
              <div
                class="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3"
                style="background-color: rgb(111, 68, 252); color: white"
              >
                <div class="dark flex flex-col items-start gap-4 break-words">
                  <div
                    class="prose w-full break-words text-left text-inherit dark:prose-invert"
                  >
                    <p>How do I add data to my chatbot?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mr-8 flex justify-start">
              <div
                class="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3"
                style="background-color: rgb(241, 241, 240); color: black"
              >
                <div class="flex flex-col items-start gap-4 break-words">
                  <div
                    class="prose w-full break-words text-left text-inherit dark:prose-invert"
                  >
                    <p>
                      To add data to your chatbot, you have a few options. You
                      can upload documents such as PDF, TXT, DOC, or DOCX files.
                      Alternatively, you can paste text directly into the
                      chatbot or provide a link to your website for Chatbase to
                      extract the data. Once the data is uploaded, Chatbase will
                      train ChatGPT on your data and create a chatbot that can
                      answer questions about the content. You can find the
                      option to manage your sources and add data by clicking on
                      "Manage Sources" in your chatbot menu. Let me know if you
                      need any further assistance!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="scrolldown-icon !text-dark !h-[30px] !w-[30px] !rounded-full !bg-zinc-100"
          type="button"
        ></button>
      </div>
    </div>
    <div class="bg-inherit">
      <form>
        <div class="flex overflow-x-auto py-3">
          <button
            type="button"
            class="mr-1 mt-1 whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-2 text-sm hover:bg-zinc-200"
          >
            What is Chatbase?</button
          ><button
            type="button"
            class="mr-1 mt-1 whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-2 text-sm hover:bg-zinc-200"
          >
            How do I add data to my chatbot?</button
          ><button
            type="button"
            class="mr-1 mt-1 whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-2 text-sm hover:bg-zinc-200"
          >
            Is there a free plan?</button
          ><button
            type="button"
            class="mr-1 mt-1 whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-2 text-sm hover:bg-zinc-200"
          >
            What are some use cases?</button
          ><button
            type="button"
            class="mr-1 mt-1 whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-2 text-sm hover:bg-zinc-200"
          >
            Can I deploy the chatbot on my custom domain?
          </button>
        </div>
        <div
          class="flex rounded p-1 pl-3"
          style="background: white; border: 1px solid #e4e4e7"
        >
          <div class="flex w-full items-center">
            <textarea
              aria-label="chat input"
              required=""
              maxlength="2000"
              rows="1"
              class="m-0 max-h-36 min-h-[1.5rem] w-full flex-1 resize-none appearance-none rounded-md border-0 bg-inherit pr-7 focus:outline-none focus:ring-0 focus-visible:ring-0"
              style="height: 0px"
            ></textarea>
          </div>
          <div class="flex items-end">
            <button type="submit" class="flex-none p-2" disabled="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5"
              >
                <path
                  d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div>
            <div
              class="grecaptcha-badge"
              data-style="bottomright"
              style="
                width: 256px;
                height: 60px;
                display: block;
                transition: right 0.3s ease 0s;
                position: fixed;
                bottom: 14px;
                right: -186px;
                box-shadow: gray 0px 0px 5px;
                border-radius: 2px;
                overflow: hidden;
              "
            >
              <div class="grecaptcha-logo">
                <iframe
                  title="reCAPTCHA"
                  width="256"
                  height="60"
                  role="presentation"
                  name="a-9xt7gd746cph"
                  frameborder="0"
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdQyeUkAAAAAK_5dC_7EsRhIi9MSVZC2hc_irOz&amp;co=aHR0cHM6Ly93d3cuY2hhdGJhc2UuY286NDQz&amp;hl=pt-BR&amp;type=image&amp;v=MydHw_zggsxIJuhSbyOmPv5R&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=lk3jcpyqx281"
                ></iframe>
              </div>
              <div class="grecaptcha-error"></div>
              <textarea
                id="g-recaptcha-response"
                name="g-recaptcha-response"
                class="g-recaptcha-response"
                style="
                  width: 250px;
                  height: 40px;
                  border: 1px solid rgb(193, 193, 193);
                  margin: 10px 25px;
                  padding: 0px;
                  resize: none;
                  display: none;
                "
              ></textarea>
            </div>
            <iframe style="display: none"></iframe>
          </div>
        </div>
        <div class="pt-4"></div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
