// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    auth: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        enableGlobalAppMiddleware: true
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    nitro: {
        preset: 'vercel'
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "sass:math";'
                }
            }
        }
    }
})
