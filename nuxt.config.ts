// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Nuxt Vite',
      short_name: 'Nuxt Vite',
      description: 'Nuxt Vite PWA',
      display: 'standalone',
      theme_color: '#ffffff',
      lang: 'en',
      icons: [
        {
          src: "icons/icon.png",
          sizes: '256x256',
          type: 'image/png',
        },
      ],
    },
  },
  workbox: {
    navigateFallback: '/',
  },
  devOptions: {
    enabled: true,
    type: 'module',
  }
})
