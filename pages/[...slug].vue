<template>
  <main class="shadow-lg mb-4 dark:text-white">
    <Navbar/>
    <div class="">
      <div class="mx-auto grid grid-cols-4 max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div class="col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-3 2xl:col-span-3 lg:pr-10 lg:border-r-2 lg:border-gray-800">
          <TheTitle>{{ data.title }}</TheTitle>
          <ContentDoc>
            <template #not-found>
              <PageNotFound/>
            </template>
            <template #empty>
              <Empty/>
            </template>
          </ContentDoc>
          <prev-next :prev="prev" :next="next" />
        </div>
        <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <Sidebar />
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

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path }).only(['title']).findOne()
})

const [prev, next] = await queryContent()
  .only(['_path', 'title'])
  .sort({ date: 1})
  .where({title: {$not: "Blogs"}})
  .findSurround('content/blog/first')

const nuxtApp = useNuxtApp()
nuxtApp.provide(
  'getUrl',
  function (slug) {
    slug = slug.replace(/^\/+/, '');

    return process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}${slug}` : `/${slug}`
  }
)
</script>
