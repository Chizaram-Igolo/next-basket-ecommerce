"use client";

import React from "react";
import "../../globals.css";
import ProductSection from "@/components/product/ProductSection";
import SingleProductSection from "@/components/product/SingleProductSection";
import BreadCrumbNavbar from "@/components/BreadCrumbNavbar";
import SinglePost from "@/components/SinglePost";

const ProductPage = ({ params }: { params: { id: string } }) => {
  let queryId: string | number = params.id.split("-").splice(-1)[0];
  let productId = parseInt(queryId);
  productId = !isNaN(productId) && productId !== null ? productId : 1;

  return (
    <div className="sample-ecommerce">
      <BreadCrumbNavbar />
      <SingleProductSection productId={productId} />
      <SinglePost />
      <ProductSection isNotHomePage={true} />
    </div>
  );
};

export default ProductPage;
