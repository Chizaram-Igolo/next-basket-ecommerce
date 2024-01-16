import { IProduct } from "@/app/types";

const API_BASE_URL = "http://localhost:3000";

const ProductService = {
  getProducts: async (limit: number, skip: number): Promise<IProduct[]> => {
    const response = await fetch(
      `${API_BASE_URL}/api/products?limit=${limit}&skip=${skip}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: IProduct[] = (await response.json()).products;
    return data;
  },
};

export default ProductService;
