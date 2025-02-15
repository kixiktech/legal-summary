
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowRight, FileText, Shield, Zap } from "lucide-react";

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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Transform Your{" "}
              <span className="text-primary">Depositions</span> into Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Expert summarizations tailored for legal professionals. Fast. Accurate. Secure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/upload"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Upload Your Deposition
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
              >
                Learn More
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
