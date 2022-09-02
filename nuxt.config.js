import { resolve } from 'path'
import components from "./config/components"

export default {
    /*alias: {
        'style': resolve(__dirname, './assets/css')
    },*/
    target: 'static',
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
        theme_color: '#18181b',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'og:image', name: 'og:image', content: "nuxt.webp" },
            { hid: 'theme_color', name: 'theme_color', content: "#18181b" },
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
