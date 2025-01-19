import { PaymentResult, Payments } from "@/typing";

  
  export const processPayment = async (paymentDetails: {
    orderId: string;
    amount: number;
    paymentDetails: Payments;
  }): Promise<PaymentResult> => {
    // Simulate API call to process payment
    console.log(`Processing payment for order ID: ${paymentDetails.orderId}, amount: ${paymentDetails.amount}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true, // Mock payment success
          transactionId: "txn_67890", // Mock transaction ID
        });
      }, 1000); // Simulate a 1-second delay
    });
  };