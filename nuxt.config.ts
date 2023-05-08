// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  secret: process.env.AUTH_SECRET,
  auth: {
    origin: process.env.AUTH_ORIGIN
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false
  }
})
