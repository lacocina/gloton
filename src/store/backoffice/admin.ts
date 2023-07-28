import { defineStore } from "pinia"
import { api } from "../../services/api.ts"
import type { User } from "@types/User.ts";
import type { Business } from "@types/Business.ts";

export const useAdminStore = defineStore('admin', {
    state: () => ({
        user: null as User | null,
        business: null as Business | null,
        userLoading: false as boolean,
    }),

    getters: {
        getUser: (state) => state.user,
        getUserLoading: (state) => state.userLoading
    },

    actions: {
        async fetchUserData() {
            this.userLoading = true
            try {
                this.user = {
                    name: 'Antonio',
                    lastname: 'De Jesús',
                    email: 'adjesus@gmail.com',
                    phoneNumber: 444444,
                    businessList: [0]
                }

                const businessId = this.user.businessList?.[0]
                const { data } = await api.get<Business>(`businesses/${businessId}.json`)
                this.business = data

            } catch (e) {
                console.error(e)
            } finally {
                this.userLoading = false
            }
        }
    }
})
