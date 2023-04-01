<template>
  <div class="flex justify-between mt-20">
    <ButtonLink
      v-if="prev"
      :href="prev._path"
      class="bg-indigo-200 hover:underline"
    >
      <span aria-hidden="true">←</span>
      {{ prev.title }}
    </ButtonLink>
    <ButtonLink
      v-if="next"
      :href="next._path"
      class="bg-indigo-200 hover:underline"
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
