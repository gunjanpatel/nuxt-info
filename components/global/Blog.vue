<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post._id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img :src="post.imageUrl" class="h-full w-full object-cover object-center" />
          </div>
          <div class="flex items-center gap-x-4 text-xs mt-6">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            <span v-for="tag in post.tags" class="rounded bg-gray-100 p-2 font-bold">{{ tag }}</span>
<!--            <a :href="post.category.href"
               class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{{
                post.category.title
              }}</a>-->
          </div>
          <div class="group relative w-full text-center">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a :href="post._path">
                <span class="absolute inset-0"/>
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{{ post.description }}</p>
          </div>
<!--          <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <span class="absolute inset-0"/>
                {{ post.author.name }}
              </p>
              <p class="text-gray-600">{{ post.author.bio }}</p>
            </div>
          </div>-->
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const {data: posts} = await useAsyncData('posts-list', () => queryContent('/blog').where({title: { $not : "Blogs" }}).sort({date: 1}).find())
</script>
