<template>
  <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h2>
</template>
