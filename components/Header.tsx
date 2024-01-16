"use client";

import { useState } from "react";
import Cart from "./widgets/Cart";
import Wishlist from "./widgets/WishList";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); // State for Wishlist

  const handleOpenCart = () => {
    setIsCartOpen(true);
    setIsWishlistOpen(false); // Close Wishlist when opening Cart
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
    <div>
      <h1>Your Website</h1>
      <button onClick={handleOpenCart}>Open Cart</button>
      <button onClick={handleOpenWishlist}>Open Wishlist</button>
      {isCartOpen && <Cart onClose={handleCloseCart} />}
      {isWishlistOpen && <Wishlist onClose={handleCloseWishlist} />}{" "}
      {/* Render Wishlist component */}
    </div>
  );
};

export default Header;
