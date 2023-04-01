<template>
  <div class="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 lg:pl-10 lg:border-l-2 lg:border-gray-800">
  <TheTitle>My Blogs</TheTitle>
  <ul class="list-none">
    <li v-for="post in posts" class="my-2 py-5 border-b border-gray-200">
      <a :href="nuxtApp.$getUrl(post._path)">{{ post.title }}</a>
    </li>
  </ul>
  </div>
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

const { isBlogPage } = () => {
  const pattern = /^\/blog\/.*/;
  return pattern.test(useRoute());
}

</script>
