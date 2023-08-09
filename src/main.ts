import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@css/style.scss'
import App from './App.vue'
import axios from "axios"
import VueAxios from "vue-axios"
import { router } from "./router"
import { i18n } from "./lang/i18n"
import Vue3Lottie from 'vue3-lottie'

createApp(App)
    .use(router)
    .use(i18n)
    .use(Vue3Lottie, { name: "Vue3Lottie" })
    .use(createPinia())
    .use(VueAxios, axios)
    .mount('#app')
