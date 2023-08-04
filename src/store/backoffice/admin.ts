import { defineStore } from "pinia"
import { api } from "../../services/api.ts"
// @ts-ignore TODO
import type { User } from "@types/User.ts"
// @ts-ignore TODO
import type { Business } from "@types/Business.ts"
// @ts-ignore TODO
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
        getMenuCategories: (state): MenuCategory[] | undefined => state.business?.menu.categories
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
