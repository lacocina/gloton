import type { MenuItem } from "./MenuItem.ts";

export interface MenuCategory {
    id: number,
    name: string,
    description: string,
    show: boolean,
    items: MenuItem[]
}
