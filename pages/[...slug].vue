<template>
  <main class="shadow-lg mb-4 dark:text-white dark:bg-gray-900 h-screen">
    <Navbar/>
    <ContentDoc>
      <template #not-found>
        <PageNotFound/>
      </template>
      <template #empty>
        <Empty/>
      </template>
    </ContentDoc>
    <Copyright/>
  </main>
</template>

<script setup>
const nuxtApp = useNuxtApp()
nuxtApp.provide(
  'getUrl',
  function (slug) {
    slug = slug.replace(/^\/+/, '');

    return process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}${slug}` : `/${slug}`
  }
)
</script>
