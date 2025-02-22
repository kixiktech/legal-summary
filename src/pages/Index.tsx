
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import CustomAutomationsSection from "@/components/landing/CustomAutomationsSection";
import TestimonialsScroll from "@/components/testimonials/TestimonialsScroll";
import SecuritySection from "@/components/landing/SecuritySection";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";

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
      <SecuritySection />
      <PricingSection />
      <CustomAutomationsSection />
      <CTASection />
      <Footer onNavigation={handleNavigation} />
    </div>
  );
};

export default Index;
