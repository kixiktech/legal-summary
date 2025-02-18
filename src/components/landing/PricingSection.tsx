
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Summarization",
      price: "$0.50",
      description: "Perfect for individual practitioners and small firms",
      features: ["Standard processing time", "Basic summary format", "Key points extraction", "Email support", "Secure document storage"]
    },
    {
      title: "Premium Summarization",
      price: "$1.00",
      description: "Ideal for law firms and high-volume users",
      features: ["Priority processing", "Advanced summary format", "Deep insights extraction", "24/7 priority support", "Extended document storage", "Custom templates", "Bulk processing"]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that best fits your needs. All plans include our core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative p-8 glass-card rounded-xl animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      per page
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/signup" className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
