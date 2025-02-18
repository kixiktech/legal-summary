
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Scale } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-up">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Revolutionizing Legal Document Processing
            </div>
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10">
              <Scale className="h-12 w-12 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance relative animate-fade-up group">
            Transform Hours of Deposition Reading into{" "}
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent transition-all duration-300">
              Instant Case-Winning Insights
            </span>
            <div className="absolute -inset-x-4 -inset-y-2 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg -z-10"></div>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Cut through the noise with precision. Instant, reliable, and secure. Get the key facts instantly without missing critical details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/signup" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
