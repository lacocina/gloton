import axios from "axios";
export const api = axios.create({
    baseURL: "https://gloton-app-default-rtdb.europe-west1.firebasedatabase.app/"
})

export const apiLocal = axios.create({
    baseURL: 'http://localhost:3000'
})
