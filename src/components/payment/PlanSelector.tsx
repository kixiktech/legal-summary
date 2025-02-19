
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlanSelectorProps {
  pageCount: number;
  selectedPlan: "basic" | "premium";
  onPlanChange: (plan: "basic" | "premium") => void;
}

const PlanSelector: React.FC<PlanSelectorProps> = ({
  pageCount,
  selectedPlan,
  onPlanChange,
}) => {
  const basicRate = 0.5;
  const premiumRate = 1.0;
  const cost = pageCount * (selectedPlan === "basic" ? basicRate : premiumRate);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-2">Select Your Plan</h2>
        <p className="text-sm text-muted-foreground">
          Choose the plan that best fits your needs
        </p>
      </div>

      <div className="grid gap-4">
        <Button
          variant="outline"
          className={cn(
            "h-auto p-4 justify-start text-left",
            selectedPlan === "basic" 
              ? "border-primary bg-primary text-black hover:bg-primary hover:text-black" 
              : "text-white hover:text-white"
          )}
          onClick={() => onPlanChange("basic")}
        >
          <div>
            <div className="font-medium">Basic Summary</div>
            <div className={cn(
              "text-sm",
              selectedPlan === "basic" ? "text-black/70" : "text-muted-foreground"
            )}>
              $0.50 per page
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className={cn(
            "h-auto p-4 justify-start text-left",
            selectedPlan === "premium" 
              ? "border-primary bg-primary text-black hover:bg-primary hover:text-black" 
              : "text-white hover:text-white"
          )}
          onClick={() => onPlanChange("premium")}
        >
          <div>
            <div className="font-medium">Premium Summary</div>
            <div className={cn(
              "text-sm",
              selectedPlan === "premium" ? "text-black/70" : "text-muted-foreground"
            )}>
              $1.00 per page
            </div>
          </div>
        </Button>
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Total Cost</span>
          <span className="text-2xl font-bold">${cost.toFixed(2)}</span>
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          Based on {pageCount} pages
        </div>
      </div>
    </div>
  );
};

export default PlanSelector;
