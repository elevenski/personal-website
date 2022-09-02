import { resolve } from 'path'
import components from "./config/components"
target: 'static'

export default {
    /*alias: {
        'style': resolve(__dirname, './assets/css')
    },*/
    build: {
        extractCSS: true,
    },
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    css: [
        '~/assets/css/main.css'
    ],
    plugins: [
        '~/assets/js/main.js'
    ],
    head: {
        title: 'my website title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'nuxt.webp' }]
    },
    noscript: [
        { innerHTML: 'This website requires JavaScript.' }
    ],
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        // Options
    }
}