<template>
    <Default>
      <div class="grid grid-cols-4 items-start">
        <div class="col-span-4 md:col-span-3 lg:col-span-3 lg:pr-8">
          <slot />
          <PrevNext :prev="prev" :next="next" />
        </div>
        <div class="mt-10 md:mt-0 lg:mt-0 col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 lg:pl-10 lg:border-l-2 lg:border-gray-800">
          <Sidebar/>
        </div>
      </div>
    </Default>
</template>
<script setup>
import Default from "~/layouts/default.vue";

const { page } = useContent()
const { next, prev } = useContent()
</script>

