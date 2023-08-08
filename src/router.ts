import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { useAdminStore } from "@store/backoffice/admin.ts";

// Admin
import LoginView from "./pages/LoginView.vue"
import AdminView from "./pages/AdminView.vue"
import AdminHome from "./pages/admin/AdminHome.vue"
import AdminUser from "./pages/admin/AdminUser.vue"
import AdminBusiness from "./pages/admin/AdminBusiness.vue"

import AdminMenu from "./pages/admin/AdminMenu.vue"
import AdminCategoryDetail from "./pages/admin/AdminCategoryDetail.vue"
import AdminNewCategory from "./pages/admin/AdminNewCategory.vue"
import AdminNewCategoryItem from "./pages/admin/AdminNewCategoryItem.vue"

import AdminGeneralSettings from "./pages/admin/AdminGeneralSettings.vue"

// Front
import CategoriesList from "./pages/CategoriesList.vue"
import CategoryDetail from "./pages/CategoryDetail.vue"

// Docs
import CategoriesManagement from "./pages/CategoriesManagement.vue"
import CssDocs from "./pages/CssDocs.vue"


const routes: RouteRecordRaw[] = [
    { path: '/', component: CategoriesList },
    { path: '/detail/:categoryId', component: CategoryDetail, props: true },
    { path: '/login', name: 'login', component: LoginView },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        redirect: { name: 'admin-home' },
        meta: { private: true },
        children: [
            {
                path: '/admin/home',
                name: 'admin-home',
                component: AdminHome,
                meta: {
                    pageHeader: 'home'
                }
            },
            {
                path: '/admin/user',
                name: 'admin-user',
                component: AdminUser,
                meta: {
                    pageHeader: 'user'
                }
            },
            {
                path: '/admin/business',
                name: 'admin-business',
                component: AdminBusiness,
                meta: {
                    pageHeader: 'business'
                }
            },
            {
                path: '/admin/menu',
                name: 'admin-menu',
                component: AdminMenu,
                meta: {
                    pageHeader: 'menu'
                }
            },
            {
                path: '/admin/general-settings',
                name: 'admin-general-settings',
                component: AdminGeneralSettings,
                meta: {
                    pageHeader: 'settings'
                }
            },
            {
                path: '/admin/menu/category/:categoryId',
                name: 'admin-category-detail',
                component: AdminCategoryDetail,
                props: true
            },
            {
                path: '/admin/menu/new-category',
                name: 'admin-new-category',
                component: AdminNewCategory,
                props: true
            },
            {
                path: '/admin/menu/category/:categoryId/new-category-item',
                name: 'admin-new-category-item',
                component: AdminNewCategoryItem,
                props: true
            },
        ]
    },
    { path: '/management', component: CategoriesManagement },
    { path: '/css', component: CssDocs }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const adminStore = useAdminStore()
    if (to.matched.some((record) => record.meta.private) && !adminStore.getUser) {
        // TODO - Ir a la página privada que ha intentado entrar
        // console.log(to)
        // next({ name: "login", params: { toPath: to.fullPath } })
        next({ name: "login" })
    } else {
        next()
    }
})
