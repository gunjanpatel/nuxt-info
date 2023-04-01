<template>
  <main class="shadow-lg mb-4 dark:text-white">
    <Navbar/>
    <div class="mx-auto gap-x-8 gap-y-16 lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-20 xl:col-span-3 2xl:col-span-3">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-8">{{ page.title }}</h2>
      <div class="grid grid-cols-4 items-start">
        <div class="col-span-4 md:col-span-3 lg:col-span-3 lg:pr-8">
          <ContentDoc>
            <template #not-found>
              <PageNotFound/>
            </template>
            <template #empty>
              <Empty/>
            </template>
          </ContentDoc>
          <PrevNext v-if="isBlogPage(path)" :prev="prev" :next="next" />
        </div>
        <div v-if="isBlogPage(path)"
          class="mt-10 md:mt-0 lg:mt-0 col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 lg:pl-10 lg:border-l-2 lg:border-gray-800">
          <Sidebar/>
        </div>
      </div>
    </div>
    <Copyright/>
  </main>
</template>

<script setup>

useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900'
  }
})

const { page } = useContent()

const {path} = useRoute()
const {prev, next} = useContent()
const nuxtApp = useNuxtApp()
nuxtApp.provide(
  'getUrl',
  function (slug) {
    slug = slug.replace(/^\/+/, '');

    return process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}${slug}` : `/${slug}`
  }
)
const isBlogPage = (path) => {
  const pattern = /^\/blog\/.*/;
  return pattern.test(path);
}
</script>
