
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the growing number of legal professionals who are saving time and gaining deeper insights with our AI-powered deposition summarization tool.
          </p>
          <Link 
            to="/waitlist" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
