import { fileURLToPath } from 'node:url'
import { URL } from 'node:url'
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // Recommended to lock behavior
  future: {
    compatibilityVersion: 4, // Explicitly opt-in to Nuxt 4 folder structure/behavior
  },
  ssr: true, // Default is true, but good to be explicit since that's your goal
  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  routeRules: {
    '/**': { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
