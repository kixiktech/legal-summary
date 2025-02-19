
import React from "react";

const SecuritySection = () => {
  return (
    <section className="relative w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Secure and Compliant
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            LegalSummarize utilizes custom AI trained for legal needs, securely operating on infrastructure that's SOC 2 and HIPAA certified. Your sensitive information is protected by a level of security not found in other services.
          </p>
          
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-48 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center p-4 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-up group">
              <span className="text-sm font-semibold text-white text-center group-hover:text-primary transition-colors">AICPA & SOC 2 Compliant</span>
            </div>
            <div className="w-48 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center p-4 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-up group" style={{ animationDelay: "100ms" }}>
              <span className="text-sm font-semibold text-white text-center group-hover:text-primary transition-colors">HIPAA Certified</span>
            </div>
            <div className="w-48 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center p-4 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-up group" style={{ animationDelay: "200ms" }}>
              <span className="text-sm font-semibold text-white text-center group-hover:text-primary transition-colors">HITECH Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
