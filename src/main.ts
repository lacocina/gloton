import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './css/style.css'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import { router } from "./router";
import { i18n } from "./lang/i18n";

createApp(App)
    .use(router)
    .use(i18n)
    .use(createPinia())
    .use(VueAxios, axios)
    .mount('#app')
