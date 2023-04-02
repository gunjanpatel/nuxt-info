<template>
  <script v-if="page.gistUrl" :src="page.gistUrl"></script>
</template>
<script setup>
const { page } = useContent()
</script>
