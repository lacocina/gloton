import { defineStore } from "pinia";
import { Business } from "../types/Business";
import { api } from "../services/api";
export const useBusinessStore = () => {
    const businessStore = defineStore('business', {
        state: () => ({
            business: null as Business | null,
            loading: true,
            error: null as any | null,
        }),
        getters: {
            getName: (state) => state.business?.name,
            getMenu: (state) => state.business?.menu
        },
        actions:  {
            async fetchBusiness() {
                try {
                    // await new Promise((resolve) => setTimeout(resolve, 2000))
                    const businessResponse = await fetch('https://gloton-app-default-rtdb.europe-west1.firebasedatabase.app/businesses.json')
                    const businessJson = await businessResponse.json()
                    this.business = businessJson[0]
                    // const axiosRes = await api.get('/businesses')
                    // console.log(axiosRes)
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
