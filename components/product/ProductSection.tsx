"use client";

import { IProduct } from "@/app/types";
import ProductCard from "./ProductCard";
import ButtonMUI from "../ButtonMUI";
import ProductService from "@/utils/apiUtils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { makeUrlFriendly } from "@/utils/helperFunctions";

interface IPostSection {
  isNotHomePage?: boolean;
}

const ProductSection: React.FC<IPostSection> = ({ isNotHomePage }) => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0); // Track the number of items to skip for pagination
  const [hasMore, setHasMore] = useState(true); // Track if there are more products to load

  const loadMoreProducts = async () => {
    try {
      setLoading(true);
      const newProducts = await ProductService.getProducts(10, skip + 10);
      if (newProducts.length === 0) {
        setHasMore(false); // No more products to load
      } else {
        setProducts([...products, ...newProducts]); // Append new product to the existing list
        console.log(products);
        setSkip(skip + 10); // Increment the skip count
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const initialProducts = await ProductService.getProducts(10, 0);
        setProducts(initialProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
                    products.map((p) => (
                      <Link
                        href={`/product/${p.id}`}
                        as={`/product/${makeUrlFriendly(p.title)}-${p.id}`}
                        className="no-underline"
                        key={p.title + p.id}
                      >
                        <ProductCard
                          id={p.id}
                          title={p.title}
                          category={p.category}
                          price={p.price}
                          discountPercentage={p.discountPercentage}
                          thumbnail={p.thumbnail}
                          stock={p.stock}
                        />{" "}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {!isNotHomePage && (
          <div>
            {loading && <p>Loading...</p>}
            {hasMore && (
              <ButtonMUI
                text="LOAD MORE PRODUCTS"
                onClick={loadMoreProducts}
                disabled={loading}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
