import { defineStore } from "pinia"
import { api } from "../services/api"
import type { User } from "../types/User.ts";

export const useAdminStore = defineStore('admin', {
    state: () => ({
        user: null as User | null,
        userLoading: false as boolean
    }),

    getters: {
        getUser: (state) => state.user,
        getUserLoading: (state) => state.userLoading
    },

    actions: {
        async fetchUserData() {
            this.userLoading = true
            try {
                const newUser: User = {
                    name: 'Antonio',
                    lastname: 'De Jesús',
                    email: 'adjesus@gmail.com',
                    phoneNumber: 444444,
                    businessList: [0]
                }
                this.user = newUser
            } catch (e) {
                console.error(e)
            } finally {
                this.userLoading = false
            }
        }
    }
})
