<template>
  <main class="shadow-lg mb-4 dark:text-white">
    <Navbar/>
    <div class="">
      <div
        class="mx-auto grid grid-cols-4 max-w-2xl items-start gap-x-8 gap-y-16 px-4 py-20 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div class="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
          <TheTitle>{{ data.title }}</TheTitle>
          <ContentDoc>
            <template #not-found>
              <PageNotFound/>
            </template>
            <template #empty>
              <Empty/>
            </template>
          </ContentDoc>
          <prev-next :prev="prev" :next="next"/>
        </div>
        <Sidebar/>
      </div>
    </div>
    <Copyright/>
  </main>
</template>

<script setup>
const { prev, next } = useContent()

useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900'
  }
})

const {path} = useRoute()

const {data} = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({_path: path}).only(['title']).findOne()
})

const nuxtApp = useNuxtApp()
nuxtApp.provide(
  'getUrl',
  function (slug) {
    slug = slug.replace(/^\/+/, '');

    return process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}${slug}` : `/${slug}`
  }
)
</script>
