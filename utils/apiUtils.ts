import { IProduct } from "@/app/types";

// Check if we are in a production environment
const isProduction = process.env.NODE_ENV === "production";

const API_BASE_URL = isProduction
  ? "https://next-basket-five.vercel.app"
  : "http://localhost:3000";

const ProductService = {
  getProducts: async (limit: number, skip: number): Promise<IProduct[]> => {
    const response = await fetch(
      `${API_BASE_URL}/api/products?limit=${limit}&skip=${skip}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) throw new Error("Failed to fetch products");

    const data: IProduct[] = (await response.json()).products;
    return data;
  },

  getProduct: async (productId: number): Promise<IProduct> => {
    const response = await fetch(
      `${API_BASE_URL}/api/product?productId=${productId}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) throw new Error("Failed to fetch product");

    const data: IProduct = await response.json();
    return data;
  },
};

export default ProductService;
