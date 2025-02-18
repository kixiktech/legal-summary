
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import CustomAutomationsSection from "@/components/landing/CustomAutomationsSection";
import TestimonialsScroll from "@/components/TestimonialsScroll";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsScroll />
      <PricingSection />
      <CustomAutomationsSection />
      <Footer onNavigation={handleNavigation} />
    </div>
  );
};

export default Index;
