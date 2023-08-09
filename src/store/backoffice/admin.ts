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
            // return (categoryId: number, itemId: number) => state.business?.menu.categories.find((category) => category.id === categoryId).items.find((item) => item.id === itemId)
        }
    },

    actions: {
        async fetchUserData() {
            this.userLoading = true
            try {
                // TODO Poner el userId en base al login
                const userId: number = 1
                const userResponse = await api.get<User>(`users/${userId}.json`)
                this.user = userResponse.data

                const businessId = this.user?.businessList?.[0]
                const businessResponse = await api.get<Business>(`businesses/${businessId}.json`)
                this.business = businessResponse.data

            } catch (e) {
                console.error(e)
            } finally {
                this.userLoading = false
            }
        }
    }
})
