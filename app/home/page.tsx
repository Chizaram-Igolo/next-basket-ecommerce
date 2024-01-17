import React from "react";
import "../globals.css";
import ProductSection from "@/components/product/ProductSection";
import FeatureSection from "@/components/feature/FeatureSection";
import PostSection from "@/components/feature/PostSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <div className="sample-ecommerce">
      <HeroSection />
      <ProductSection />
      <FeatureSection />
      <PostSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
