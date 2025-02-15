
import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  processing: boolean;
  setProcessing: (processing: boolean) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  onSuccess,
  processing,
  setProcessing,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    // TODO: Implement actual payment processing
    // For now, we'll simulate a successful payment
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-2">Payment Details</h2>
        <p className="text-sm text-muted-foreground">
          Enter your card information to complete the purchase
        </p>
      </div>

      <div className="space-y-4">
        <div className="glass-card rounded-lg p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#FFFFFF",
                  "::placeholder": {
                    color: "#666666",
                  },
                },
              },
            }}
          />
        </div>

        {error && (
          <div className="text-sm text-destructive">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={!stripe || processing}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          {processing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Your payment is secure and encrypted</p>
      </div>
    </form>
  );
};

export default PaymentForm;
