<template>
    <main class="mb-4 h-full flex flex-col min-h-screen" :id="'page-' + page._file.replace('.', '-')">
      <Navbar/>
      <div class="flex-1 overflow-y-auto mx-auto gap-x-8 gap-y-16 lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-20 xl:col-span-3 2xl:col-span-3">
          <TheTitle v-if="page && page.show_heading">{{ page.title }}</TheTitle>
          <slot />
      </div>
      <div class="shadow-lg shadow-slate-800 mb-4">&nbsp;</div>
      <Footer />
    </main>
</template>
<script setup>
const { page } = useContent()
</script>

