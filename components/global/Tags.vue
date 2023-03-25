<template>
  <ul v-if="tags" class="flex space-x-3 mt-2">
    <li class="text-gray-400 font-bold" v-for="tag in tags" :key="tag">
      {{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
