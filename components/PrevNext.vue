<template>
  <div class="flex justify-between mt-20">
    <ButtonLink
      v-if="prev"
      :href="prev._path"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline"
    >
      <span aria-hidden="true">←</span>
      {{ prev.title }}
    </ButtonLink>
    <ButtonLink
      v-if="next"
      :href="next._path"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline"
    >
      {{ next.title }}
      <span aria-hidden="true">→</span>

    </ButtonLink>
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
