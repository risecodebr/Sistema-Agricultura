// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Sistema Agrícola',
      short_name: 'Sistema Agrícola',
      description: 'Sistema Agrícola Criado com NuxtJS',
      display: 'standalone',
      theme_color: '#ffffff',
      lang: 'en',
      icons: [
        {
          src: "icons/icon.png",
          sizes: '512x512',
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
  },
  css:[
    'bootstrap/dist/css/bootstrap.css',
  ],
  plugins: [
    '~/plugins/useBootstrap.client.ts',
  ],
}) 