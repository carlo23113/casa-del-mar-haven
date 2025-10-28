// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Playfair Display': [400, 500, 600, 700],
      'Inter': [300, 400, 500, 600, 700]
    },
    display: 'swap'
  },

  app: {
    head: {
      title: 'Casa Del Mar Haven - Luxury Beach Resort',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience luxury and tranquility at Casa Del Mar Haven, your perfect beachside retreat.' }
      ]
    }
  }
})
