import AboutSection from "@/components/shared/AboutSection";
import CTASection from "@/components/shared/CTASection";
import FeatureSection from "@/components/shared/FeatureSection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
