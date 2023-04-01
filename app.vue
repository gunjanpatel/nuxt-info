<template>
  <NuxtPage />
</template>
<script setup>

useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900 dark:text-white'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
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
