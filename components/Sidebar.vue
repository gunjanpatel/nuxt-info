<template>
  <TheTitle>My Blogs</TheTitle>
  <ul class="list-none">
    <li v-for="post in posts" class="my-2 py-5 border-b border-gray-200">
      <a :href="nuxtApp.$getUrl(post._path)">{{ post.title }}</a>
    </li>
  </ul>
</template>
<script setup>
const nuxtApp = useNuxtApp()
const {data: posts} = await useAsyncData(
  'posts-list',
  () => queryContent('/blog')
    .where({title: {$not: "Blogs"}})
    .sort({date: 1})
    .find()
)

</script>
