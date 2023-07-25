import { defineStore } from "pinia";
import { api } from "../services/api";
import type { Business } from "../types/Business";
import type { MenuCategory } from "../types/MenuCategory";

export const useBusinessStore = () => {
    const businessStore = defineStore('business', {
        state: () => ({
            business: null as Business | null,
            loading: true,
            error: null as any | null,
        }),
        getters: {
            getName: (state) => state.business?.name,
            getCategoryById: (state) => {
                return (categoryId: number) => state.business?.menu.categories.find((category) => category.id === categoryId)
            },
            getMenuCategories(state): MenuCategory[] | undefined {
                return state.business?.menu.categories.filter((category) => {
                    return category.show && category.items
                })
            }
        },
        actions:  {
            async fetchBusiness() {
                try {
                    // await new Promise((resolve) => setTimeout(resolve, 2000))
                    const { data } = await api.get<Business[]>('/businesses.json')
                    this.business = data[0]
                } catch (e) {
                    this.error = e
                } finally {
                    this.loading = false
                }
            },
        }
    })
    const store = businessStore()
    if (store.business === null) {
        store.fetchBusiness()
    }
    return store
}
