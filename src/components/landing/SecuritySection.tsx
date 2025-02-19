
import React from "react";
const SecuritySection = () => {
  return <section className="relative w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Secure and Compliant
          </h2>
          <p className="text-lg text-gray-400 mb-12">LegalSummarize utilizes custom AI trained for legal needs, securely operating on infrastructure that's SOC 2 and HIPAA certified. Your sensitive information is protected by a level of security not found in other services.</p>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="w-64 h-32 bg-white/5 rounded-lg flex items-center justify-center p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-lg font-semibold text-white text-center">AICPA & SOC 2 Compliant</span>
            </div>
            <div className="w-64 h-32 bg-white/5 rounded-lg flex items-center justify-center p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-lg font-semibold text-white text-center">HIPAA Certified</span>
            </div>
            <div className="w-64 h-32 bg-white/5 rounded-lg flex items-center justify-center p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-lg font-semibold text-white text-center">HITECH Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SecuritySection;
