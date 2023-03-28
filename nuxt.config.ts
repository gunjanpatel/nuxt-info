// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      baseURL: '/nuxt-info/' // Exposed to the frontend as well.
    }
  },
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
