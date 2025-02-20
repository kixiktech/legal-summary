
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Scale } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

  const handleGetStarted = () => {
    navigate("/waitlist");
  };

  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-primary/80 mb-6 px-6 py-2 inline-block rounded-full bg-primary/5 border border-primary/10">
              Revolutionizing Legal Document Processing
            </div>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
              <Scale className="w-10 h-10 text-primary" />
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
              className="bg-primary text-black hover:bg-primary/80 px-8 py-6 text-lg h-auto"
              onClick={handleGetStarted}
            >
              Join the Waitlist →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
