import { IProduct } from "@/app/types";

const API_BASE_URL = "http://localhost:3000"; // Update with your actual Next.js server URL

const ProductService = {
  getProducts: async (): Promise<IProduct[]> => {
    const response = await fetch(`${API_BASE_URL}/api/products`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: IProduct[] = (await response.json()).products;
    return data;
  },
};

export default ProductService;
