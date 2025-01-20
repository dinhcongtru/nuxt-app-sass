// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image','nuxt-splide'],
  image: {
    dir: 'assets/images',
    baseURL: '/_ipx/',
    provider: "ipx",
    format: ['webp','jpg','png','svg','jpeg','gif','avif']
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/style.sass" as *\n',
        },
      },
    },
  },
  splide: {
    theme: 'default'
  },
  app: {
    baseURL: '/nuxt-app-sass/'
  },
})