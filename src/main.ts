import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './css/style.css'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import { router } from "./router";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueAxios, axios)
    .mount('#app')
