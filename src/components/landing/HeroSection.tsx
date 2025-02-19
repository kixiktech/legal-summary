
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-primary/80 mb-4 px-6 py-2 inline-block rounded-full bg-primary/5 border border-primary/10">
              Revolutionizing Legal Document Processing
            </div>
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L3 9V21H21V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7L7 10.5V18H17V10.5L12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance relative group text-white mb-8">
            Transform Hours of Deposition Reading into{" "}
            <span className="text-primary">Instant Case-Winning Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Cut through the noise with precision. Instant, reliable, and secure. Get the key facts instantly without missing critical details.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/80 px-8 py-6 text-lg h-auto"
              onClick={handleGetStarted}
            >
              Get Started →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
