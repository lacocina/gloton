import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { useAdminStore } from "@store/admin.ts";

// Admin
import AdminView from "./pages/AdminView.vue"
import AdminHome from "./pages/admin/AdminHome.vue"
import AdminUser from "./pages/admin/AdminUser.vue"
import AdminBusiness from "./pages/admin/AdminBusiness.vue"
import AdminMenu from "./pages/admin/AdminMenu.vue"
import AdminGeneralSettings from "./pages/admin/AdminGeneralSettings.vue"
import AdminLogin from "./pages/admin/AdminLogin.vue"
// Front
import CategoriesList from "./pages/CategoriesList.vue";
import CategoryDetail from "./pages/CategoryDetail.vue";
// Docs
import CategoriesManagement from "./pages/CategoriesManagement.vue";
import CssDocs from "./pages/CssDocs.vue";


const routes: RouteRecordRaw[] = [
    { path: '/', component: CategoriesList },
    { path: '/detail/:categoryId', component: CategoryDetail, props: true },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        redirect: { name: 'admin-home' },
        // beforeEnter: (to, from, next) => {
        //     const adminStore = useAdminStore()
        //     router.push({ name: !adminStore.getUser ? '/admin-login' : '/admin-home' })
        // },
        children: [
            {
                path: '/admin-login',
                name: 'admin-login',
                component: AdminLogin
            },
            {
                path: '/admin/home',
                name: 'admin-home',
                component: AdminHome
            },
            {
                path: '/admin/user',
                name: 'admin-user',
                component: AdminUser
            },
            {
                path: '/admin/business',
                name: 'admin-business',
                component: AdminBusiness
            },
            {
                path: '/admin/menu',
                name: 'admin-menu',
                component: AdminMenu
            },
            {
                path: '/admin/general-settings',
                name: 'admin-general-settings',
                component: AdminGeneralSettings
            }
        ]
    },
    { path: '/management', component: CategoriesManagement },
    { path: '/css', component: CssDocs }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
