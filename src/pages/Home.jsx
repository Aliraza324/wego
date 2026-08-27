import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import HeroSection from "../components/HeroSection";
import ImpactStats from "../components/ImpactStats";
import CompaniesSection from "../components/CompaniesSection";
import MissionSection from "../components/MissionSection";
import WasteCalculator from "../components/WasteCalculator";
import ExpandShowcase from "../components/ExpandShowcase";
import PartnersSection from "../components/PartnersSection";
import EnvironmentalConsultants from "../components/EnvironmentalConsultants";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-[#E1E0CC] selection:bg-[#E1E0CC] selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Impact Statistics with Functional Counters */}
        <ImpactStats />

        {/* 3. Companies Collaboration Logo Cloud */}
        <CompaniesSection />

        {/* 4. Amsterdam Mission Section */}
        <MissionSection />

        {/* 5. Interactive Waste to Value Calculator */}
        <WasteCalculator />

        {/* 6. ScrollExpand Showcase (Zero Waste 360 For Business) */}
        <ExpandShowcase />

        {/* 7. 3D DriftWall Collaboration Partners */}
        <PartnersSection />

        {/* 8. Environmental Consultants Video & Benefits Section */}
        <EnvironmentalConsultants />

        {/* 9. Social Proof 4 (Wall of Love Testimonial Marquee) */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
