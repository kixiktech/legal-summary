
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CustomAutomationsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Header */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Unlock the Power of Custom Automation for Your Firm
            </h2>
            <div className="h-1 w-24 bg-primary/30 rounded mb-6"></div>
            <p className="text-xl text-foreground/80 font-medium">
              Take your practice to the next level with enterprise-grade automation solutions.
            </p>
          </div>

          {/* Right side - Content and CTA */}
          <div className="glass-card rounded-2xl p-8 md:p-10 animate-fade-up flex flex-col h-full justify-between">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Ready to scale up? We offer specialized, custom-trained automations 
                tailored to your unique workflows. Perfect for firms looking to process
                5,000–8,000 automations monthly with dedicated support and customization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">Custom-trained models for your specific needs</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">Dedicated support and implementation team</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">High-volume processing capabilities</p>
                </li>
              </ul>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-4 mt-8 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors group"
            >
              Contact Us About Custom Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAutomationsSection;
