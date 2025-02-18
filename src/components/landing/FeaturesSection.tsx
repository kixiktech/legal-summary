
import React from "react";
import { Zap, FileText, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description: "Get comprehensive summaries in minutes, not hours. Save valuable time for case preparation."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Precision Perfect",
      description: "AI-powered analysis ensures accurate, detailed summaries capturing every crucial detail."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bank-Level Security",
      description: "Your documents are protected with enterprise-grade encryption and security measures."
    }
  ];

  return (
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 glass-card rounded-lg animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`
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
  );
};

export default FeaturesSection;
