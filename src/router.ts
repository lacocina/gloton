import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CategoriesManagement from "./pages/CategoriesManagement.vue";
import CategoriesList from "./pages/CategoriesList.vue";
import CategoryDetail from "./pages/CategoryDetail.vue";

const routes: RouteRecordRaw[] = [
    { path: '/', component: CategoriesList },
    { path: '/detail', component: CategoryDetail },
    { path: '/management', component: CategoriesManagement }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
