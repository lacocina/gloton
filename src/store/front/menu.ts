import { defineStore } from "pinia";

interface dish {
    name: string,
    price: number,
    ingredients?: string[]
}

export const useMenuStore = defineStore('menu', {
    state: () => ({
        count: 0 as number | null,
        name: 'Casa Eduardo',
        menu: [] as dish[]
    }),
    getters: {
        getName: (state) => state.name,
        getMenu: (state) => state.menu
    },
    actions:  {
        increment() {
            this.count&&this.count++
        },
        addItem() {
            const newItem = {
                name: 'plato ' + this.menu.length,
                price: 10
            }
            this.menu.push(newItem)
        }
    }
})
