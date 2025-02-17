import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowRight, FileText, Shield, Zap, Check } from "lucide-react";
import TestNav from "@/components/TestNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-up">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Revolutionizing Legal Document Processing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance relative animate-fade-up group">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary/90 group-hover:to-primary">
                Transform Hours of Deposition Reading into Case-Winning Insights
                <span className="text-primary">--Fast</span>
              </span>
              <div className="absolute -inset-x-4 -inset-y-2 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg -z-10"></div>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Expert summarizations tailored for legal professionals. Fast. Accurate. Secure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-secondary">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Designed for Legal Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform combines advanced technology with legal expertise to deliver
              unparalleled results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "Lightning Fast",
                description:
                  "Get comprehensive summaries in minutes, not hours. Save valuable time for case preparation.",
              },
              {
                icon: <FileText className="h-6 w-6 text-primary" />,
                title: "Precision Perfect",
                description:
                  "AI-powered analysis ensures accurate, detailed summaries capturing every crucial detail.",
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Bank-Level Security",
                description:
                  "Your documents are protected with enterprise-grade encryption and security measures.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 glass-card rounded-lg animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 mb-4 rounded-full bg-secondary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
            {[
              {
                title: "Basic Summarization",
                price: "$0.50",
                description: "Perfect for individual practitioners and small firms",
                features: [
                  "Standard processing time",
                  "Basic summary format",
                  "Key points extraction",
                  "Email support",
                  "Secure document storage"
                ]
              },
              {
                title: "Premium Summarization",
                price: "$1.00",
                description: "Ideal for law firms and high-volume users",
                features: [
                  "Priority processing",
                  "Advanced summary format",
                  "Deep insights extraction",
                  "24/7 priority support",
                  "Extended document storage",
                  "Custom templates",
                  "Bulk processing"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="group relative p-8 glass-card rounded-xl animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
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
                  
                  <Link
                    to="/signup"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-6 mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of legal professionals who trust our platform for their
              document summarization needs.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 LegalSummarize. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
