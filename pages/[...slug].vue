<template>
  <main class="shadow-lg mb-4 dark:text-slate-400 dark:bg-gray-900 h-screen">
    <Navbar />
    <ContentDoc>
      <template #not-found> <h1>Page not found</h1> </template>
      <template #empty></template>
    </ContentDoc>
  </main>
</template>
