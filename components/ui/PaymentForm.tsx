"use client";
import { useState } from "react";
import { useNotifications } from "@/app/context/NotificationContext";

const PaymentForm = ({ onSuccess, isProcessing }: { onSuccess: () => void; isProcessing: boolean }) => {
  const [error, setError] = useState<string | null>(null);
  const { addNotification } = useNotifications(); // Use your custom notification system

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Simulating payment...");
      setTimeout(() => {
        console.log("Payment successful!");
        addNotification("Payment successful!", "success"); // Show success notification
        onSuccess(); // Move to the next step
      }, 2000); // Simulate a 2-second delay
    } catch (err) {
      console.error("Payment processing error:", err);
      setError("An error occurred during payment. Please try again.");
      addNotification("Payment failed. Please try again.", "error"); // Show error notification
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        <p>Mock Payment Form (No real payment required)</p>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition-colors disabled:opacity-50"
      >
        {isProcessing ? "Processing Payment..." : "Complete Purchase"}
      </button>
    </form>
  );
};

export default PaymentForm;