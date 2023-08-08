import { defineStore } from "pinia";
import { api } from "../../services/api.ts";
// @ts-ignore TODO
import type { Business } from "@types/Business.ts";
// @ts-ignore TODO
import type { MenuCategory } from "@types/MenuCategory.ts";

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
                    return category.show && category.items?.some((item) => item.show)
                })
            }
        },
        actions:  {
            async fetchBusiness() {
                try {
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
