<template>
  <div class="flex justify-between mt-20">
    <a
      v-if="prev"
      :href="nuxtApp.$getUrl(next._path)"
      class="hover:underline text-indigo-400 font-bold hover:text-indigo-100"
    >
      <span aria-hidden="true">←</span>
      {{ prev.title }}
    </a>
    <a
      v-if="next"
      :href="nuxtApp.$getUrl(next._path)"
      class="hover:underline text-indigo-400 hover:text-indigo-100"
    >
      {{ next.title }}
      <span aria-hidden="true">→</span>

    </a>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
</script>
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
