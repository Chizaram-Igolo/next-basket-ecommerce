"use client";

import { IProduct } from "@/app/types";
import ProductService from "@/utils/apiUtils";
import React, { useEffect, useState } from "react";
// import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import { addToWishlist, selectWishlist } from "@/lib/slices/wishListSlice";
import { RootState } from "@/lib/store";

interface ISingleProductSection {
  productId: number;
}

const SingleProductSection: React.FC<ISingleProductSection> = ({
  productId,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await ProductService.getProduct(productId);
        setProduct(product);
        console.log("dd", product);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    if (product) {
      // Check if the item is already in the cart
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item is already in the cart, add a new instance with a different quantity
        dispatch(
          addToCart({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            quantity: existingItem.quantity + 1,
          })
        );
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        dispatch(
          addToCart({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            quantity: 1,
          })
        );
      }
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      dispatch(
        addToWishlist({
          id: product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
        })
      );
    }
  };

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
                    {product.stock !== undefined && product.stock > 0
                      ? "In Stock"
                      : "Out of Stock"}
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

                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleAddToWishlist}>Add to Wishlist</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
