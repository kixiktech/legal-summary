
import React from "react";
import { Shield, LockClosedIcon, CheckCircle2 } from "lucide-react";

const SecurityInfo = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">
        Secure Payment
      </h1>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="font-medium mb-1">Bank-Level Security</h3>
            <p className="text-sm text-muted-foreground">
              Your payment is protected with state-of-the-art encryption and secure servers.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <LockClosedIcon className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="font-medium mb-1">Safe & Secure</h3>
            <p className="text-sm text-muted-foreground">
              We use Stripe for secure payment processing, trusted by millions worldwide.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="font-medium mb-1">Money-Back Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              Not satisfied? Get a full refund within 7 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityInfo;
