import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const dev = mode === 'development';
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
                '@assets': path.resolve('./src/assets'),
                '@css': path.resolve('./src/css'),
                '@store': path.resolve('./src/store'),
                '@components': path.resolve('./src/components')
            },
        },
        css: {
            modules: {
                generateScopedName: dev ? '[local]--[hash:base64:4]' : '[hash:base64:4]',
                localsConvention: 'camelCaseOnly',
            },
            devSourcemap: true
        },
    }
})
