import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
            '@assets': path.resolve('./src/assets'),
            '@css': path.resolve('./src/css'),
            '@csstools': path.resolve('./src/css/tools'),
            '@components': path.resolve('./src/components')
        },
    },
    css: {
        modules: {
            generateScopedName: '[local]--[hash:base64:2]',
            localsConvention: 'camelCaseOnly',
        },
    },
})
