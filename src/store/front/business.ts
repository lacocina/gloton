import { defineStore } from "pinia"
import { api } from "../../services/api.ts"
import type { Business } from "@types/Business.ts"
import type { MenuCategory } from "@types/MenuCategory.ts"

export const useBusinessStore = () => {
    const businessStore = defineStore('business', {
        state: () => ({
            business: null as Business | null,
            loading: true,
            error: null as any | null,
        }),
        getters: {
            getName: (state) => state.business?.name,
            getMenuCategories(state): MenuCategory[] | undefined {
                return state.business?.menu.categories.filter((category) => {
                    return category.show && category.items?.some((item) => item.show)
                })
            }
        },
        actions:  {
            async fetchBusiness() {
                try {
                    const { data } = await api.get(`businesses/${1}`)
                    this.business = data
                } catch (e) {
                    this.error = e
                } finally {
                    this.loading = false
                }
            },

            getCategoryById(categoryId: number) : MenuCategory {
                return this.business?.menu.categories
                    .find((category) => category.id === categoryId)
            },
        }
    })
    const store = businessStore()
    if (store.business === null) {
        store.fetchBusiness()
    }
    return store
}
