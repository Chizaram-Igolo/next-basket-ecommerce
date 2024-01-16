import { IProduct } from "@/app/types";
import ProductService from "@/utils/apiUtils";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await ProductService.getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
};
