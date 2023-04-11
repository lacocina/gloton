import { MenuItem } from "./MenuItem";

export interface MenuCategory {
    id: number,
    name: string,
    description: string,
    show: boolean,
    items: MenuItem[]
}
