import { defineStore } from "pinia"
import { api } from "../../services/api.ts"
import type { User } from "@types/User.ts"
import type { Business } from "@types/Business.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"
import { notify } from "@kyvg/vue3-notification"
import {AxiosError, HttpStatusCode} from "axios";

export class UnauthorizedError extends Error {
    constructor() {
        super("Unauthorized");
    }
}

export class InternalServerError extends Error {
    constructor() {
        super("Internal Server Error");
    }

}

export const useAdminStore = defineStore('admin', {
    state: () => ({
        user: null as User | null,
        business: null as Business | null,
        userLoading: false as boolean,
    }),

    getters: {
        menuCategories: (state): MenuCategory[] | undefined => state.business?.menu.categories,
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
            // TODO pasar las llamadas a los services
            try {
                const { data } = await api.post(`users/login`,payload)
                this.user = data.user
                this.business = data.business

                notify({
                    title: 'Login correcto',
                    text: `Bienvenido ${this.user.name}!`
                })

            } catch (e) {
                if (e instanceof AxiosError) {
                    if (e.response.status === HttpStatusCode.InternalServerError) {
                        throw new InternalServerError()
                    }
                    if (e.response.status === HttpStatusCode.Unauthorized) {
                        throw new UnauthorizedError()
                    }
                }
                notify({
                    type: 'error',
                    title: 'Email o contraseña incorrecta'
                })
                throw e
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
