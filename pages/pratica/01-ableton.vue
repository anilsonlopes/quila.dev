<script lang="ts" setup>
definePageMeta({
  layout: "pratica",
});

const links = [
  {
    title: "Live",
    url: "#",
  },
  {
    title: "Push",
    url: "#",
  },
  {
    title: "Link",
    url: "#",
  },
  {
    title: "Shop",
    url: "#",
  },
  {
    title: "Packs",
    url: "#",
  },
  {
    title: "Help",
    url: "#",
  },
  {
    title: "More",
    url: "#",
  },
];
</script>

<template>
  <div>
    <nav class="flex justify-between border-b px-20 py-5 font-semibold">
      <div class="flex space-x-8">
        <a href="#">
          <svg
            role="img"
            aria-label="Logo Ableton"
            class="main-nav__logo__image"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="21"
            viewBox="0 0 45 21"
          >
            <path
              d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
            ></path>
          </svg>
        </a>
        <a v-for="link in links" :href="link.url">
          {{ link.title }}
        </a>
      </div>
      <div class="flex space-x-8">
        <a href="#" class="text-blue-700">Try Live for free</a>
        <a href="#">Account</a>
        <a href="#">Log out</a>
      </div>
    </nav>
    <header class="py-20">
      <div class="container mx-auto">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/misc-downloads/scan-1-1_800x400.jpg__800x400_q85_subsampling-2.jpg"
          class="h-auto w-full"
          alt="Imagem"
        />
      </div>
    </header>
    <Pratica01AbletonQuote>
      We make <a href="#" class="text-blue-700">Live</a>,
      <a href="#" class="text-blue-700">Push</a> and
      <a href="#" class="text-blue-700">Link</a> — unique software and hardware
      for music creation and performance. With these products, our community of
      users creates amazing things.
      <template #sub>
        Ableton was founded in 1999 and released the first version of Live in
        2001. Our products are used by a community of dedicated musicians, sound
        designers, and artists from across the world.
      </template>
    </Pratica01AbletonQuote>
    <section class="relative">
      <div
        class="absolute right-0 top-0 -z-10 h-full w-[60%] bg-yellow-200"
      ></div>
      <div class="container mx-auto my-20 py-32">
        <div class="grid grid-cols-2 items-center">
          <div>
            <img
              src="https://ableton-production.imgix.net/link/photo-build.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=933"
              alt="Imagem"
            />
          </div>
          <div class="pl-24">
            <img
              src="https://images.unsplash.com/photo-1534103704502-96e3a4ed093b?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem"
            />
          </div>
        </div>
      </div>
    </section>
    <Pratica01AbletonQuote>
      Making music isn’t easy. It takes time, effort, and learning. But when
      you're in the flow, it's incredibly rewarding.
      <template #sub>
        We feel the same way about making Ableton products. The driving force
        behind Ableton is our passion for what we make, and the people we make
        it for.
      </template>
    </Pratica01AbletonQuote>
    <Pratica01AbletonVideo
      src=""
      poster="https://images.unsplash.com/photo-1649456674221-12b66d8a6fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Why Ableton - Juape Bolivar"
    ></Pratica01AbletonVideo>
    <Pratica01AbletonQuote>
      We are more than 350 people from 30 different countries divided between
      our headquarters in Berlin and offices in Los Angeles and Tokyo.
      <template #sub>
        Most of us are active musicians, producers, and DJs, and many of us use
        Live on a daily basis. We come from a wide range of cultural and
        professional backgrounds. Some of us have PhDs, and some of us are
        self-taught. What connects us is the shared belief that each of us has
        the skills and knowledge to contribute to something big: helping to
        shape the future of music culture.
      </template>
    </Pratica01AbletonQuote>
    <section class="relative">
      <div
        class="absolute left-0 top-0 -z-10 h-full w-[60%] bg-green-200"
      ></div>
      <div class="container mx-auto my-20 py-32">
        <div class="grid grid-cols-2 items-center">
          <div class="grid gap-32">
            <img
              src="https://images.unsplash.com/photo-1477579266593-ccd7841e4f02?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem"
            />
            <img
              src="https://images.unsplash.com/photo-1642089969822-8796dc7cc5bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem"
            />
          </div>
          <div class="py-20 pl-32">
            <img
              src="https://images.unsplash.com/photo-1654102902342-b1b652180e51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-[600px] w-full object-cover"
              alt="Imagem"
            />
          </div>
        </div>
      </div>
    </section>
    <Pratica01AbletonQuote>
      We believe it takes focus to create truly outstanding instruments. We only
      work on a few products and we strive to make them great.
      <template #sub>
        Rather than having a one-size-fits-all process, we try to give our
        people what they need to work their magic and grow. We’ve learned that
        achieving the best results comes from building teams that are richly
        diverse, and thus able to explore problems from a wider set of
        perspectives. We don’t always agree with each other, but opinion and
        debate are valued and openly encouraged.
      </template>
    </Pratica01AbletonQuote>
    <Pratica01AbletonVideo
      src=""
      poster="https://images.unsplash.com/photo-1649456674221-12b66d8a6fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Meet the makers: Ableton developers at work"
    ></Pratica01AbletonVideo>
    <Pratica01AbletonQuote>
      We're passionate about what we do, but we're equally passionate about
      improving who we are.
      <template #sub>
        <p>
          We work hard to faster on environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p class="mt-2">
          Alongside an internap training program, employees are actively
          supported in acquiring new knowledge and skills, and coached an
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </template>
    </Pratica01AbletonQuote>
    <section class="relative">
      <div
        class="absolute left-1/2 top-1/2 -z-10 h-full w-[50%] -translate-x-1/2 -translate-y-1/2 transform bg-purple-300"
      ></div>
      <img
        src="https://ableton-production.imgix.net/link/photo-build.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=933"
        class="absolute right-0 top-[10%] h-[80%] w-[40%] object-cover"
        alt="Imagem"
      />
      <div class="container mx-auto my-20 py-32">
        <div class="grid grid-cols-2 items-center">
          <div class="pr-24">
            <img
              src="https://images.unsplash.com/photo-1534103704502-96e3a4ed093b?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem"
            />
          </div>
        </div>
      </div>
    </section>
    <Pratica01AbletonQuote>
      We want our employees to love it here. Since we're looking for exceptional
      talent from around the world, we will do everything we can to make your
      transition as easy as possible.
      <template #sub>
        <p>
          If you're joining us in Berlin, we 'll help with relocation and
          paperwork. We 'll even provide you with free German or English
          leassons. Plus, working in Germany means you can expect comprehensive
          health insurance for you and your family, as well as generous
          maternity and paternity leave. Office hours are flexible, but it's not
          all work; we have several company and team outings throughout the year
          as well as a variely of fun, informal small-group activities.
        </p>
      </template>
    </Pratica01AbletonQuote>
    <section class="my-20">
      <div class="container mx-auto grid grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem"
        />
        <div
          class="flex flex-col items-center justify-center bg-blue-300 px-44"
        >
          <div class="max-w-md text-xl">
            <p class="leading-relaxed">
              We're really proud of the work we've done so far. But there's so
              much more to come. If you'd like to be a part of it, please join
              us.
            </p>
            <a href="#" class="mt-5 inline-block text-blue-700">
              See latest jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
