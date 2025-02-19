
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
            Parrot Deposition Summaries utilize custom AI trained for legal needs, securely operating on infrastructure that's SOC 2 and HIPAA certified. Your sensitive information is protected by a level of security not found in other services.
          </p>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="w-24 h-24 md:w-32 md:h-32">
              <img 
                src="/lovable-uploads/193fb53f-e6ec-471d-ab96-6de62b429f09.png" 
                alt="AICPA SOC 2 Certification"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32">
              <img 
                src="/lovable-uploads/193fb53f-e6ec-471d-ab96-6de62b429f09.png" 
                alt="HIPAA Compliant"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32">
              <img 
                src="/lovable-uploads/193fb53f-e6ec-471d-ab96-6de62b429f09.png" 
                alt="HITECH Compliant"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
