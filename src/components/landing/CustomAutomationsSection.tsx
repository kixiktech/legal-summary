
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CustomAutomationsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container px-6 mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary">
            Custom Automations for Your Firm
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to take it a step further? We offer specialized, custom-trained automations 
            tailored to your unique workflows. If you're looking for a high-volume solution 
            (5–8k automations) with monthly retainers, we can help you set it up in your own 
            firm or personal work.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Contact Us About Custom Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomAutomationsSection;
