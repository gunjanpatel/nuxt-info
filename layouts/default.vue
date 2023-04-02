<template>
    <main class="shadow-lg shadow-slate-800 mb-4 h-full" :id="'page-' + page._file.replace('.', '-')">
      <Navbar/>
      <div class="mx-auto gap-x-8 gap-y-16 lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-20 xl:col-span-3 2xl:col-span-3">
          <TheTitle v-if="page && page.show_heading">{{ page.title }}</TheTitle>
          <slot />
      </div>
    </main>
    <Footer />
</template>
<script setup>
const { page } = useContent()
</script>

