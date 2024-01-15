import { IProduct } from "@/app/types";
import ProductCard from "./ProductCard";
import ButtonMUI from "../ButtonMUI";

const products: IProduct[] = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-1.png",
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-2.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-3.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-4.png",
  },
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-5.png",
  },
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-6.png",
  },
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-7.png",
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-8.png",
  },
  {
    id: 9,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-9.png",
  },
  {
    id: 10,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPercentage: 6.48,
    thumbnail: "/product-10.png",
  },
];

export default function ProductSection() {
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
                  {products.map((p) => (
                    <ProductCard
                      id={p.id}
                      title={p.title}
                      category={p.category}
                      price={p.price}
                      discountPercentage={p.discountPercentage}
                      thumbnail={p.thumbnail}
                      key={p.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonMUI text="LOAD MORE PRODUCTS" />
      </div>
    </div>
  );
}
