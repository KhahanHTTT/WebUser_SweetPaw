import { apiGetAuth } from "./api.js";

export async function getMyOrders() {
  return apiGetAuth("/api/orders/my-orders");
}
export async function getOrderDetail(orderId) {
  return apiGetAuth(`/api/orders/detail/${orderId}`);
}