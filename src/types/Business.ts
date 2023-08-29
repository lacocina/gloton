import type { Menu } from "./Menu";

export interface Business {
    id: number
    name: string
    email: string
    phoneNumber: number
    menu: Menu
}
