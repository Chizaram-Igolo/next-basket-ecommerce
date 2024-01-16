"use client";

import { IProduct } from "@/app/types";
import ProductService from "@/utils/apiUtils";
import React, { useEffect, useState } from "react";
// import "./style.css";

interface ISingleProductSection {
  productId: number;
}

const SingleProductSection: React.FC<ISingleProductSection> = ({
  productId,
}) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await ProductService.getProduct(productId);
        setProduct(product);
        console.log(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="desktop-product">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="carousel">
              <div className="overlap-group">
                <div className="carousel-inner">
                  <div className="carousel-item" />
                </div>
                <img
                  className="carousel-control"
                  alt="Carousel control"
                  src="carousel-control-next.svg"
                />
                <img
                  className="img"
                  alt="Carousel control"
                  src="carousel-control-prev.svg"
                />
              </div>
              <div className="carousel-indicators">
                <img
                  className="carousel-captions"
                  alt="Carousel captions"
                  src="carousel-captions.png"
                />
                <div className="div" />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            {product && (
              <>
                <div className="h">{product.title}</div>
                <div className="frame">
                  <img className="stars" alt="Stars" src="stars.svg" />
                  <div className="text-wrapper">10 Reviews</div>
                </div>
                <div className="h-2">${product.price}</div>
                <div className="div-2">
                  <div className="text-wrapper">Availability&nbsp;&nbsp;:</div>
                  <div className="h-3">
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
                <div className="paragraph">{""}</div>
                <img className="hr" alt="Hr" src="hr.svg" />
                <div className="product-colors">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                </div>
                <div className="product-actions">
                  <div className="btn-primary-color">
                    <div className="h-4">Select Options</div>
                  </div>
                  <img className="img-2" alt="Like" src="like.svg" />
                  <img className="img-2" alt="Basket" src="basket.svg" />
                  <img className="img-2" alt="More" src="more.svg" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
