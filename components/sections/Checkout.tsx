"use client"
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "react-toastify"; // For showing notifications
import StripePaymentForm from "@/components/ui/StripePaymentForm"; // Example payment form component
import { createOrder } from "@/utils/createOrder"; // Mock createOrder function
import { processPayment } from "@/utils/processPayment"; // Mock processPayment function
import { Order, PaymentResult, Payments, ShippingDetails } from "@/typing"; // Import your ProductCards interface

const Checkout = () => {
  const { validateCartBeforeCheckout, state, dispatch } = useCart();
  const [currentStep, setCurrentStep] = useState<"details" | "payment" | "confirmation">("details");
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const totalItems = state.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  // Handle shipping details submission
  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsProcessing(true);

      // Validate the cart with Sanity
      const validatedCart = await validateCartBeforeCheckout();
      if (validatedCart.length === 0) {
        toast.error("Your cart is empty or invalid. Please add items to proceed.");
        return;
      }

      // Move to payment step
      setCurrentStep("payment");
    } catch (error) {
      console.error("Error processing shipping details:", error);
      toast.error("Failed to validate your cart. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle payment submission
  const handlePayment = async (paymentDetails: Payments) => {
    try {
      setIsProcessing(true);

      // Create order in your database
      const order: Order = await createOrder({
        cart: state.cart,
        shipping: shippingDetails,
        payment: paymentDetails,
      });

      // Process payment (e.g., with Stripe)
      const paymentResult: PaymentResult = await processPayment({
        orderId: order.id,
        amount: totalPrice, // Use the calculated totalPrice
        paymentDetails,
      });

      if (paymentResult.success) {
        // Clear cart after successful payment
        dispatch({ type: "CLEAR_CART" });

        // Move to confirmation
        setCurrentStep("confirmation");
        toast.success("Payment successful! Your order has been placed.");
      } else {
        toast.error("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      toast.error("An error occurred during payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Render different steps based on currentStep
  const renderCheckoutStep = () => {
    switch (currentStep) {
      case "details":
        return (
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Details</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                value={shippingDetails.name}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    name: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={shippingDetails.email}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    email: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={shippingDetails.address}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="City"
                value={shippingDetails.city}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={shippingDetails.postalCode}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Country"
                value={shippingDetails.country}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-primary text-white py-2 rounded hover:bg-accent disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Continue to Payment"}
            </button>
          </form>
        );

      case "payment":
        return (
          <div>
            <h2 className="text-xl font-semibold">Payment Information</h2>
            {/* Integrate payment form (e.g., Stripe Elements) */}
            <StripePaymentForm
              onSuccess={handlePayment}
              isProcessing={isProcessing}
            />
          </div>
        );

      case "confirmation":
        return (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-green-600">Order Confirmed!</h2>
            <p>Thank you for your purchase.</p>
            <div className="mt-4">
              <h3 className="font-semibold">Order Summary</h3>
              <p>Items: {totalItems}</p>
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          <span className={currentStep === "details" ? "text-primary" : ""}>
            Shipping
          </span>
          <span className={currentStep === "payment" ? "text-primary" : ""}>
            Payment
          </span>
          <span className={currentStep === "confirmation" ? "text-primary" : ""}>
            Confirmation
          </span>
        </div>
      </div>

      {/* Order summary */}
      <div className="mb-8 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold">Order Summary</h3>
        <div className="mt-2">
          <p>Items: {totalItems}</p>
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Render current checkout step */}
      {renderCheckoutStep()}
    </div>
  );
};

export default Checkout;