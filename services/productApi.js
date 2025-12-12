import { apiGetAuth } from "./api.js";

export async function getAllProducts() {
  return await apiGetAuth("/api/products");
}

export async function getRecommendProducts() {
  return await apiGetAuth("/api/recommend/home");
}


export async function getNewProducts() {
  return await apiGetAuth("/api/recommend/home");
}
export async function getTopProducts() {
  return await apiGetAuth("/api/recommend/home");
}

export async function getPopularProducts() {
  return await apiGetAuth("/api/recommend/home");
}
export async function getProductById(id) {
  return apiGetAuth(`/api/products/${id}`);
}

export async function getProductsByCategory(categoryName) {
  return apiGetAuth(`/api/products/category/${encodeURIComponent(categoryName)}`);
}
