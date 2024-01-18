"use client";

import { IProduct } from "@/app/types";
import ProductService from "@/utils/apiUtils";
import React, { useEffect, useState } from "react";
// import "./style.css";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import { addToWishlist } from "@/lib/slices/wishListSlice";
import { RootState } from "@/lib/store";
import Image from "next/image";

interface ISingleProductSection {
  productId: number;
}

const SingleProductSection: React.FC<ISingleProductSection> = ({
  productId,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const isInCart = cartItems.some((item) => item.id === productId);
  const isInWishlist = wishlistItems.some((item) => item.id === productId);

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
  }, [productId]);

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

      setSnackbarMessage(`${product.title} has been added to the cart!`);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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

      setSnackbarMessage(`${product.title} has been added to your wishlist!`);
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="desktop-product">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="carousel">
              {/* <div className="overlap-group">
                <div className="carousel-inner">
                  <div className="carousel-item" />
                </div>
                <Image
                  className="carousel-control"
                  alt="Carousel control"
                  src="/carousel-control-next.svg"
                  layout="fill"
                  
                />
                <Image
                  className="img"
                  alt="Carousel control"
                  src="/carousel-control-prev.svg"
                  layout="fill"
                  
                />
              </div> */}
              {/* <div className="carousel-indicators">
                <Image
                  className="carousel-captions"
                  alt="Carousel captions"
                  src="/carousel-captions.png"
                  layout="fill"
                  
                />
                <div className="div" />
              </div> */}
            </div>
          </div>
          <div className="col-md-2">
            {product && (
              <>
                <div className="h">{product.title}</div>
                {/* <div className="frame">
                  <Image
                    className="stars"
                    alt="Stars"
                    src="/stars.svg"
                    layout="fill"
                    
                  />
                  <div className="text-wrapper">10 Reviews</div>
                </div> */}
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
                {/* <Image className="hr" alt="Hr" src="/hr.svg" /> */}
                <div className="product-colors">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                </div>
                {/* <div className="product-actions">
                  <div className="btn-primary-color">
                    <div className="h-4">Select Options</div>
                  </div>
                  <Image
                    className="img-2"
                    alt="Like"
                    src="/like.svg"
                    layout="fill"
                    
                  />
                  <Image
                    className="img-2"
                    alt="Basket"
                    src="/basket.svg"
                    layout="fill"
                    
                  />
                  <Image
                    className="img-2"
                    alt="More"
                    src="/more.svg"
                    layout="fill"
                    
                  />
                </div> */}

                <button
                  onClick={handleAddToCart}
                  disabled={snackbarOpen || isInCart}
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleAddToWishlist}
                  disabled={snackbarOpen || isInWishlist}
                >
                  Add to Wishlist
                </button>

                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={3000} // Adjust the duration as needed
                  onClose={handleSnackbarClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <MuiAlert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    {snackbarMessage}
                  </MuiAlert>
                </Snackbar>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
