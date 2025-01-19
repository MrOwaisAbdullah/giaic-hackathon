"use client"
import { Payments } from "@/typing";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const StripePaymentForm = ({ onSuccess, isProcessing }: { onSuccess: (paymentDetails: Payments) => void; isProcessing: boolean }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
      });

      if (error) {
        setError(error.message || "Payment failed");
        return;
      }

      // Mock payment details (replace with actual data from paymentMethod)
      const paymentDetails: Payments = {
        cardNumber: "4242 4242 4242 4242", // Replace with actual card number
        expiryDate: "12/25", // Replace with actual expiry date
        cvv: "123", // Replace with actual CVV
      };

      // Pass payment details to the parent component
      onSuccess(paymentDetails);
    } catch (err) {
      console.log(err);
      setError("An error occurred during payment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-2 border rounded" />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-primary text-white py-2 rounded hover:bg-accent disabled:opacity-50"
      >
        {isProcessing ? "Processing Payment..." : "Complete Purchase"}
      </button>
    </form>
  );
};

export default StripePaymentForm;