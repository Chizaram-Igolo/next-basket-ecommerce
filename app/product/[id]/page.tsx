"use client";

import React from "react";
import "../../globals.css";
import ProductSection from "@/components/product/ProductSection";
import SingleProductSection from "@/components/product/SingleProductSection";
import BreadCrumbNavbar from "@/components/BreadCrumbNavbar";
import ProductNavbar from "@/components/ProductNavbar";
import SinglePost from "@/components/SinglePost";
import ClientsSection from "@/components/ClientsSection";

const ProductPage = ({ params }: { params: { id: string } }) => {
  let queryId: string | number = params.id.split("-").splice(-1)[0];
  let productId = parseInt(queryId);
  productId = !isNaN(productId) && productId !== null ? productId : 1;

  return (
    <div className="sample-ecommerce">
      <BreadCrumbNavbar />
      <SingleProductSection productId={productId} />
      <ProductNavbar />
      <SinglePost />
      <ProductSection isNotHomePage={true} />
      <ClientsSection />
    </div>
  );
};

export default ProductPage;
