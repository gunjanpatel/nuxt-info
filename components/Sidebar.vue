<template>
  <div v-if="posts">
    <TheTitle>Related Articles</TheTitle>
    <ul class="list-none">
      <li v-for="post in posts" class="my-2 py-5 border-b border-gray-200">
        <a :href="nuxtApp.$getUrl(post._path)">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
const path = useRoute();
const nuxtApp = useNuxtApp()
const {data: posts} = await useAsyncData(
  'posts-list',
  (path) => queryContent('/blog')
    .where({layout: {$eq: "blog"}, _path: {$ne: path}})
    .sort({date: 1})
    .find()
)
</script>
