import { defineStore } from "pinia"
import { api } from "../../services/api.ts"
import type { User } from "@types/User.ts"
import type { Business } from "@types/Business.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"
import { AxiosError, HttpStatusCode } from "axios"

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
        userName: (state): string => state.user?.name,
        menuCategories: (state): MenuCategory[] | undefined => state.business?.menu.categories,
    },

    actions: {
        getCategoryName(categoryId: number) : string{
            return this.business?.menu.categories
                .find((category) => category.id === categoryId)
                .name
        },
        getCategoryById(categoryId: number) : MenuCategory {
            return this.business?.menu.categories
                .find((category) => category.id === categoryId)
        },
        getProductById(categoryId: number, productId: number) : MenuItem {
            return this.business?.menu.categories
                .find((category) => category.id === categoryId).items
                .find((item) => item.id === productId)
        },

        // TODO pasar las llamadas a los services
        async login(payload) {
            this.userLoading = true
            try {
                const { data } = await api.post(`users/login`,payload)
                this.user = data.user
                this.business = data.business
            } catch (e) {
                if (e instanceof AxiosError) {
                    if (e.response.status === HttpStatusCode.InternalServerError) {
                        throw new InternalServerError()
                    }
                    if (e.response.status === HttpStatusCode.Unauthorized) {
                        throw new UnauthorizedError()
                    }
                }
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
                throw e
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
                throw e
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
                throw e
            }
        },
    }
})
