<template>
  <NuxtPage />
</template>
<script setup>

useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900 dark:text-white'
  }
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
