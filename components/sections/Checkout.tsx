"use client";
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useNotifications } from "@/app/context/NotificationContext";
import PaymentForm from "@/components/ui/PaymentForm"; // Updated import
import { createOrder } from "@/utils/createOrder";
import { Order, Products } from "@/typing";
import { z } from "zod";

// Zod schema for shipping details
const shippingDetailsSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

type ShippingDetails = z.infer<typeof shippingDetailsSchema>;

const Checkout = () => {
  const { validateCartBeforeCheckout, state, dispatch } = useCart();
  const { addNotification } = useNotifications();
  const [currentStep, setCurrentStep] = useState<"details" | "payment" | "confirmation">("details");
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({}); // Store validation errors
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{ items: Products[]; total: number } | null>(null);

  const totalItems = state.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form inputs using Zod
      shippingDetailsSchema.parse(shippingDetails);
      setErrors({}); // Clear any previous errors

      setIsProcessing(true);
      const validatedCart = await validateCartBeforeCheckout();
      if (validatedCart.length === 0) {
        addNotification("Your cart is empty or invalid. Please add items to proceed.", "error");
        return;
      }
      setCurrentStep("payment");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("Error processing shipping details:", error);
        addNotification("Failed to validate your cart. Please try again.", "error");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = async () => {
    try {
      setIsProcessing(true);

      // Preserve order details before clearing the cart
      setOrderDetails({
        items: state.cart, // Store the cart items
        total: totalPrice, // Store the total price
      });

      // Create a mock order
      const order: Order = await createOrder({
        cart: state.cart,
        shipping: shippingDetails,
        payment: {
          cardNumber: "4242 4242 4242 4242", // Mock payment details
          expiryDate: "12/25",
          cvv: "123",
        },
      });

      // Log the created order
      console.log("Order created:", order);

      // Clear cart after successful payment
      dispatch({ type: "CLEAR_CART" });

      // Move to confirmation
      setCurrentStep("confirmation");
      addNotification("Payment successful! Your order has been placed.", "success");
    } catch (error) {
      console.error("Order creation error:", error);
      addNotification("An error occurred while creating your order. Please try again.", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const renderCheckoutStep = () => {
    switch (currentStep) {
      case "details":
        return (
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={shippingDetails.name}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={shippingDetails.email}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  value={shippingDetails.address}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={shippingDetails.city}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={shippingDetails.postalCode}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Country"
                  value={shippingDetails.country}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, country: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition-colors disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Continue to Payment"}
            </button>
          </form>
        );

      case "payment":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
            <PaymentForm onSuccess={handlePaymentSuccess} isProcessing={isProcessing} />
          </div>
        );

      case "confirmation":
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-green-600">Order Confirmed!</h2>
            <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Items:</span> {orderDetails?.items.length || 0}</p>
                <p><span className="font-medium">Total:</span> ${orderDetails?.total.toFixed(2) || "0.00"}</p>
              </div>
            </div>
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className={`flex-1 h-1 ${currentStep === "details" ? "bg-primary" : "bg-gray-200"}`}></div>
          <div className={`flex-1 h-1 ${currentStep === "payment" ? "bg-primary" : "bg-gray-200"}`}></div>
          <div className={`flex-1 h-1 ${currentStep === "confirmation" ? "bg-primary" : "bg-gray-200"}`}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className={currentStep === "details" ? "text-primary font-semibold" : "text-gray-500"}>Shipping</span>
          <span className={currentStep === "payment" ? "text-primary font-semibold" : "text-gray-500"}>Payment</span>
          <span className={currentStep === "confirmation" ? "text-primary font-semibold" : "text-gray-500"}>Confirmation</span>
        </div>
      </div>

      {/* Fixed Order Summary (Visible only during shipping and payment steps) */}
      {currentStep !== "confirmation" && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Items:</span>{" "}
              {orderDetails ? orderDetails.items.length : totalItems}
            </p>
            <p>
              <span className="font-medium">Total:</span> $
              {orderDetails ? orderDetails.total.toFixed(2) : totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Render Current Step */}
      {renderCheckoutStep()}
    </div>
  );
};

export default Checkout;