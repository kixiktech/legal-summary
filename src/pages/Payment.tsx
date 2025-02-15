
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, LockClosedIcon, Shield, CreditCard } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import PaymentForm from "@/components/payment/PaymentForm";
import SecurityInfo from "@/components/payment/SecurityInfo";
import PlanSelector from "@/components/payment/PlanSelector";

// Initialize Stripe
const stripePromise = loadStripe("pk_test_sample"); // Replace with your public key

const Payment = () => {
  const [plan, setPlan] = useState<"basic" | "premium">("basic");
  const [processing, setProcessing] = useState(false);
  const pageCount = 50; // TODO: Get this from state/props
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    toast.success("Payment successful!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/processing"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <SecurityInfo />
            </div>

            <div className="glass-card p-6 rounded-lg animate-fade-up">
              <PlanSelector
                pageCount={pageCount}
                selectedPlan={plan}
                onPlanChange={setPlan}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="animate-fade-up">
            <div className="glass-card p-8 rounded-lg">
              <Elements stripe={stripePromise}>
                <PaymentForm
                  amount={pageCount * (plan === "basic" ? 0.5 : 1.0)}
                  onSuccess={handlePaymentSuccess}
                  processing={processing}
                  setProcessing={setProcessing}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
