"use client";

import { IProduct } from "@/app/types";
import ProductCard from "./ProductCard";
import ButtonMUI from "../ButtonMUI";
import { GetStaticProps } from "next";
import ProductService from "@/utils/apiUtils";
import { useEffect, useState } from "react";
import { useProducts } from "@/hooks/useProducts";

export default function ProductSection() {
  //   const { products } = useProducts();

  const [products, setData] = useState<IProduct[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await ProductService.getProducts();
      setData(products);
      console.log("dd", products);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="desktop-product">
      <div className="container-2">
        <div className="main-content-wrapper">
          <div className="main-content">
            <div className="section-title">Featured Products</div>
            <div className="h-section-title">BESTSELLER PRODUCTS</div>
            <p className="paragraph">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div className="product-tab-tab-wrapper">
          <div className="product-tab-tab">
            <div className="tab-content">
              <div className="tab-one">
                <div className="row-2 product-section">
                  {products.length > 0 &&
                    products
                      .slice(0, 10)
                      .map((p) => (
                        <ProductCard
                          id={p.id}
                          title={p.title}
                          category={p.category}
                          price={p.price}
                          discountPercentage={p.discountPercentage}
                          thumbnail={p.thumbnail}
                          key={p.id}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonMUI text="LOAD MORE PRODUCTS" />
      </div>
    </div>
  );
}
