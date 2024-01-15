import { IProduct } from "@/app/types";
import Image from "next/image";

type IProductCard = IProduct;

const ProductCard: React.FC<IProductCard> = ({
  title,
  category,
  price,
  discountPercentage,
  thumbnail,
}) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <div className="fixed-height-2">
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="frame-4">
          <div className="product-title">{title}</div>
          <div className="link-product">{category}</div>
          <div className="prices">
            <div className="price">${price}</div>
            <div className="h-price">%{discountPercentage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
