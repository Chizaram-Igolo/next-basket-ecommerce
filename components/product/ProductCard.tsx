"use client";

import { IProduct } from "@/app/types";
import Image from "next/image";

type IProductCard = IProduct & { idx: number };

const ProductCard: React.FC<IProductCard> = ({
  title,
  category,
  price,
  discountPercentage,
  thumbnail,
  idx,
}) => {
  return (
    <div className={`w-full h-[400px] p-6`}>
      <img
        loading="lazy"
        srcSet={thumbnail}
        className="object-contain object-center w-full h-[200px] aspect-[0.77] "
      />

      <span className="items-center self-stretch inline-flex flex-col px-5 py-8">
        <div className="text-slate-800 text-center text-base font-bold leading-6 tracking-normal self-stretch  break-words">
          {title}
        </div>
        <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-stretch whitespace-nowrap mt-2.5">
          {category}
        </div>
        <span className="items-stretch flex gap-1.5 mt-2.5 px-1 py-1.5">
          <div className="text-stone-300 text-center text-base font-bold leading-6 tracking-normal grow whitespace-nowrap">
            ${price}
          </div>
          <div className="text-teal-700 text-center text-base font-bold leading-6 tracking-normal grow whitespace-nowrap">
            %{discountPercentage}
          </div>
        </span>
      </span>
      {/* </div> */}
    </div>
  );
};

export default ProductCard;
