"use client";

import React from "react";
// import { ContentCard } from "./components/ContentCard";
import "../../globals.css";
import ProductSection from "@/components/product/ProductSection";
import FeatureSection from "@/components/feature/FeatureSection";
import PostSection from "@/components/feature/PostSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SingleProductSection from "@/components/product/SingleProductSection";
import { useParams, useRouter, usePathname } from "next/navigation";

const ProductPage = ({ params }: { params: { id: string } }) => {
  let queryId: string | number = params.id.split("-").splice(-1)[0];
  let productId = parseInt(queryId);
  productId = !isNaN(productId) && !productId === null ? productId : 1;

  return (
    <div className="sample-ecommerce">
      <SingleProductSection productId={productId} />
      <ProductSection isNotHomePage={true} />
      <FeatureSection />
      <PostSection />
      {/* <TestimonialSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default ProductPage;
