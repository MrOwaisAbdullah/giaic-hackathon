// utils/createOrder.ts
import { Products, Payments, ShippingDetails, Order } from "@/typing";

export const createOrder = async (orderDetails: {
  cart: Products[];
  shipping: ShippingDetails;
  payment: Payments;
}): Promise<Order> => {
  // Simulate API call to create an order
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "order_12345", // Mock order ID
        ...orderDetails,
      });
    }, 1000); // Simulate a 1-second delay
  });
};