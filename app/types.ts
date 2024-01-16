export interface IProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export interface ProductSectionProps {
  products: IProduct[];
}
