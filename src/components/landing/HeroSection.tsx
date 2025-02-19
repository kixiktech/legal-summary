
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance relative group text-white">
            Transform Hours of Deposition Reading into{" "}
            <span className="text-primary">Instant Case-Winning Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-8">
            Instantly summarize depositions, extract key information, and get
            unparalleled insights with our AI-powered legal summarization tool.
          </p>
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/80"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
