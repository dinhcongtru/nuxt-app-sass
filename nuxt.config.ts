// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image','nuxt-splide'],
  image: {
    dir: 'assets/images'
  },
  css: ['~/assets/styles/style.sass','~/assets/styles/libs/ui.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/global.sass" as *\n',
        },
      },
    },
  },
  splide: {
    theme: 'default'
  },
})