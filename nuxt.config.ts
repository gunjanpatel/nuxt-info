// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  experimental: {
    payloadExtraction: false,
  },
  content: {
    highlight: {
      theme: "monokai",
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'php']
    }
  },
})
