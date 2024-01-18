"use client";

import { IProduct } from "@/app/types";
import ProductCard from "./ProductCard";
import ButtonMUI from "../ButtonMUI";
import ProductService from "@/utils/apiUtils";
import { useEffect, useState } from "react";

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
    <div className="w-screen justify-center items-center bg-white flex flex-col px-16 max-md:px-5">
      <div className="w-full items-stretch flex max-w-[1124px] flex-col pl-4 pr-6 py-12 max-md:max-w-full max-md:pr-5">
        <div className="items-center self-center flex w-[691px] max-w-full flex-col justify-center mt-8 px-16 max-md:px-5">
          <span className="flex flex-col items-stretch">
            <div className="text-neutral-500 text-center text-xl leading-8 tracking-wide self-center whitespace-nowrap">
              Featured Products
            </div>
            <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-center whitespace-nowrap mt-2.5">
              BESTSELLER PRODUCTS
            </div>
            <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide whitespace-nowrap mt-2.5">
              Problems trying to resolve the conflict between{" "}
            </div>
          </span>
        </div>
        {/* <div className="items-stretch flex flex-col mt-8 p-6 max-md:max-w-full max-md:px-5"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-5 p-6 mt-4 max-md:max-w-full">
          {products.length > 0 &&
            products.map((p, idx) => (
              <ProductCard
                id={p.id}
                title={p.title}
                category={p.category}
                price={p.price}
                discountPercentage={p.discountPercentage}
                thumbnail={p.thumbnail}
                stock={p.stock}
                idx={idx}
                key={p.title + p.id}
              />
            ))}
        </div>

        {!isNotHomePage && (
          <div className="mx-auto mt-32">
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
