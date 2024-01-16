export interface IProduct {
  id: number;
  title: string;
  category?: string;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
  stock?: number;
}

export interface ICartItem {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

export interface ProductSectionProps {
  products: IProduct[];
}
