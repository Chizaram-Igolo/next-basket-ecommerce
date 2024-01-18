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
import ButtonMUI from "../ButtonMUI";

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
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, product]);

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
    <div className="justify-center items-center self-stretch bg-neutral-50 flex flex-col pb-12 px-16 max-md:px-5">
      <div className="w-[1050px] max-w-full py-0.5 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            {/* object-contain object-center w-full h-[200px] aspect-[0.77] */}
            <img
              loading="lazy"
              src={product?.thumbnail}
              className="aspect-[0.93] object-contain object-top w-full h-[100%] overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>

          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col mt-5 items-start max-md:max-w-full max-md:mt-10">
              <div className="text-slate-800 text-xl leading-8 tracking-wide self-stretch max-md:max-w-full">
                {product?.title}
              </div>
              <span className="flex gap-2.5 mt-4 items-start">
                <div className="items-stretch flex gap-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8821eaa30b394c533db44fc150210b48d1153a938d99f9b5ed9af2cd3af34e90?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/be8f5fda7d73bc5e6d0f3ea4e0e61d61464ac599c05b3aa58f37291e27a43c38?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76c6a044048f72e129f169c6b838cb664836a80cae66aef9788b984b19fd46f1?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff72e68d5389c7c4ea1b76757295b3c1111a45779f6fe1a4b4c15616f16dd264?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db51f2767cfc0935f3f7a28db455cd5dde1c17e36066af2834e6ef491e146a7?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                  />
                </div>
                <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
                  10 Reviews
                </div>
              </span>
              <div className="text-slate-800 text-left text-2xl font-bold leading-8 tracking-normal self-stretch mt-6 max-md:max-w-full">
                ${product?.price}
              </div>
              <span className="items-stretch flex gap-1.5 mt-2">
                <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                  Availability :
                </div>
                <div className="text-sky-500 text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                  {product?.stock !== undefined && product.stock > 0
                    ? "In Stock"
                    : "Out of Stock"}
                </div>
              </span>
              <div className="bg-stone-300 self-stretch shrink-0 h-px mt-28 max-md:max-w-full max-md:mt-10" />
              <div className="items-stretch flex w-[150px] max-w-full gap-2.5 mt-7">
                <div className="flex shrink-0 h-[30px] flex-col flex-1 rounded-[50%] bg-[#23A6F0]" />
                <div className="flex shrink-0 h-[30px] flex-col flex-1 rounded-[50%] bg-[#2DC071]" />
                <div className="flex shrink-0 h-[30px] flex-col flex-1 rounded-[50%] bg-[#E77C40]" />
                <div className="flex shrink-0 h-[30px] flex-col flex-1 rounded-[50%] bg-[#252B42]" />
              </div>
              <div className="items-start self-stretch flex gap-2.5 mt-16 pr-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
                <ButtonMUI
                  text=" Select Options"
                  variant="contained"
                  className="border-2 text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch bg-sky-500 self-stretch grow justify-center px-5 py-2.5 rounded-md"
                />
                <button
                  onClick={handleAddToWishlist}
                  disabled={snackbarOpen || isInWishlist}
                  className="inline-block relative w-10 h-10 aspect-square object-contain justify-center overflow-hidden shrink-0 max-w-full self-start"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/302f9fb81fc31d29023e1deb4e7d6bbd121e1725d8e19ef423a3c7bfd70a44ec?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="absolute top-0 left-0 aspect-square object-contain object-center w-10 max-w-full"
                  />
                  <div
                    className={`${
                      isInWishlist
                        ? "absolute top-0 left-0 inline-block w-10 h-10 bg-gray-100 bg-opacity-60 rounded-full z-50"
                        : "hidden"
                    }`}
                  ></div>
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={snackbarOpen || isInCart}
                  className="inline-block relative w-10 h-10 aspect-square object-contain justify-center overflow-hidden shrink-0 max-w-full self-start"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/68cb672f9d1ba10ec9ed92bcd129fb9bf82593728d69d212ae41f0465e38821c?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="absolute top-0 left-0 aspect-square object-contain object-center w-10 max-w-full"
                  />
                  <div
                    className={`${
                      isInCart
                        ? "absolute top-0 left-0 inline-block w-10 h-10 bg-gray-100 bg-opacity-60 rounded-full z-50"
                        : "hidden"
                    }`}
                  ></div>
                </button>

                <button className="inline-block relative w-10 h-10 aspect-square object-contain justify-center overflow-hidden shrink-0 max-w-full self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5275ec0ff01b3fa42c2254ff7701fd1cbe7542ea1b8716022578ca7a843b197d?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="absolute top-0 left-0 aspect-square object-contain object-center w-10 max-w-full"
                  />
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default SingleProductSection;
