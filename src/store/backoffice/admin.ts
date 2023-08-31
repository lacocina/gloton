import { defineStore } from "pinia"
import { api } from "../../services/api.ts"
import type { User } from "@types/User.ts"
import type { Business } from "@types/Business.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"

export const useAdminStore = defineStore('admin', {
    state: () => ({
        user: null as User | null,
        business: null as Business | null,
        userLoading: false as boolean,
    }),

    getters: {
        getUser: (state) => state.user,
        getUserLoading: (state) => state.userLoading,
        getBusiness: (state) => state.business,
        getMenuCategories: (state): MenuCategory[] | undefined => state.business?.menu.categories,
        getCategoryById: (state) => {
            return (categoryId: number) => state.business?.menu.categories.find((category) => category.id === categoryId)
        },
        // TODO - Falta sacar el item en concreto
        getCategoryItemById: (state) => {
            return (categoryId: number, itemId: number) => state.business?.menu.categories.find((category) => category.id === categoryId)
        }
    },

    actions: {
        async login(payload) {
            this.userLoading = true
            try {
                const { data } = await api.post(`users/login`,payload)
                this.user = data.user
                this.business = data.business
            } catch (e) {
                console.error(e)
            } finally {
                this.userLoading = false
            }
        },
        async addCategory(categoryData) {
            const payload = {
                ...categoryData,
                businessId: this.business.id,
            }
            try {
                await api.post('businesses/category', payload)
            } catch (e) {
                console.error(e)
            }
        },
        async updateCategory(categoryData) {
            const payload = {
                ...categoryData,
                businessId: this.business.id,
            }
            try {
                await api.patch('businesses/category', payload)
            } catch (e) {
                console.error(e)
            }
        },
        async addProduct(productData) {
            const payload = {
                ...productData,
                businessId: this.business.id,
            }
            try {
                await api.post('businesses/product', payload)
            } catch (e) {
                console.error(e)
            }
        },
    }
})
