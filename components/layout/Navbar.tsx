"use client";

import { useEffect, useState } from "react";
import Cart from "../widgets/Cart";
import Wishlist from "../widgets/WishList";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [cartItemCount, setCartItemCount] = useState(0);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const { items: wishlistItems } = useSelector(
    (state: RootState) => state.wishlist
  );

  useEffect(() => {
    setCartItemCount(cartItems.length || 0);
    setWishlistItemCount(wishlistItems.length || 0);
  }, [cartItems, wishlistItems]);

  useEffect(() => {
    setCartItemCount(cartItems.length || 0);
    setWishlistItemCount(wishlistItems.length || 0);
  }, [cartItems, wishlistItems]);

  const handleOpenCart = () => {
    setIsCartOpen(true);
    setIsWishlistOpen(false);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenWishlist = () => {
    setIsWishlistOpen(true);
    setIsCartOpen(false); // Close Cart when opening Wishlist
  };

  const handleCloseWishlist = () => {
    setIsWishlistOpen(false);
  };

  return (
    <header className="flex items-center justify-between gap-5 max-md:flex-wrap">
      <div className="flex justify-between gap-5 my-auto px-5 pl-8 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal">
          <Link
            href="/"
            className="text-slate-800 text-center font-bold leading-6 tracking-wide self-stretch"
          >
            Bandage
          </Link>
        </div>
        <div className="items-start flex justify-between gap-3 px-px py-1.5">
          <a
            href="#"
            className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap self-start"
            aria-label="Home"
          >
            Home
          </a>
          <a
            href="#"
            className="text-slate-800 text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap self-start"
            aria-label="Shop"
          >
            Shop
          </a>
          <img
            loading="lazy"
            src="/down-arrow-head.svg"
            alt="Down Arrow Head Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "10px", height: "10px" }}
            className="aspect-[2] object-contain object-center w-2.5 fill-slate-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <a
            href="#"
            className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-start"
            aria-label="About"
          >
            About
          </a>
          <a
            href="#"
            className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-start"
            aria-label="Blog"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-start"
            aria-label="Contact"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap self-start"
            aria-label="Pages"
          >
            Pages
          </a>
        </div>
      </div>
      <form className="items-start self-stretch flex gap-0 px-5">
        <div className="items-center self-stretch flex justify-between gap-1.5 p-4 rounded-[37px]">
          <Image
            loading="lazy"
            src="/profile-icon.svg"
            alt="Profile Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "16px", height: "16px" }}
            className="border-2 aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
            Login / Register
          </div>

          <Image
            loading="lazy"
            src="/search-icon.svg"
            alt="Search Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "16px", height: "16px" }}
            className="border-2 aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
          />
        </div>
        <div
          className="items-stretch self-center inline-flex gap-1.5 my-auto p-4 rounded-[37px] cursor-pointer"
          // onClick={handleOpenCart}
        >
          <Image
            loading="lazy"
            src="/cart-icon.svg"
            alt="Cart Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "16px", height: "16px" }}
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <span className="text-sky-500 text-center text-xs leading-4 tracking-wide">
            {cartItemCount}
          </span>
        </div>
        <div
          className="items-stretch self-center inline-flex gap-1.5 my-auto p-4 rounded-[37px] cursor-pointer"
          // onClick={handleOpenWishlist}
        >
          <Image
            loading="lazy"
            src="/wishlist-icon.svg"
            alt="Wishlist Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "16px", height: "16px" }}
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <span className="text-sky-500 text-center text-xs leading-4 tracking-wide">
            {wishlistItemCount}
          </span>
        </div>

        {isCartOpen && <Cart onClose={handleCloseCart} />}
        {isWishlistOpen && <Wishlist onClose={handleCloseWishlist} />}
      </form>
    </header>
  );
}
