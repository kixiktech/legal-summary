
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import CustomAutomationsSection from "@/components/landing/CustomAutomationsSection";
import TestimonialsScroll from "@/components/testimonials/TestimonialsScroll";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import { GenerateHeadshots } from "@/components/testimonials/GenerateHeadshots";

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
      <CTASection />
      <Footer onNavigation={handleNavigation} />
      <GenerateHeadshots />
    </div>
  );
};

export default Index;
