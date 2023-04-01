<template>
  <div class="flex justify-between mt-20">
    <NuxtLink
      v-if="prev"
      :to="prev._path"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline"
    >
      <span aria-hidden="true">←</span>
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="next._path"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline"
    >
      {{ next.title }}
      <span aria-hidden="true">→</span>

    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
