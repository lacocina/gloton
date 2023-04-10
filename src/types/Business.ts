import { MenuCategory } from "./MenuCategory";

export interface Business {
    name: string,
    email: string,
    phoneNumber: number,
    menu: MenuCategory[]
}
