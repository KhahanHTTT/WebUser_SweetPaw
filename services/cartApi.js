import { apiGetAuth } from "./api.js";

export async function getCart() {
    const user_id = localStorage.getItem('user_id');
    return await apiGetAuth(`/api/cart/${user_id}`);
}
