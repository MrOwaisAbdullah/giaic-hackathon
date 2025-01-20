"use client";
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

      const paymentDetails: Payments = {
        cardNumber: "4242 4242 4242 4242",
        expiryDate: "12/25",
        cvv: "123",
      };

      onSuccess(paymentDetails);
    } catch (err) {
      console.log(err);
      setError("An error occurred during payment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition-colors disabled:opacity-50"
      >
        {isProcessing ? "Processing Payment..." : "Complete Purchase"}
      </button>
    </form>
  );
};

export default StripePaymentForm;