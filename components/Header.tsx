"use client";

import { useState } from "react";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <h1>Your Website</h1>
      <button onClick={handleOpenCart}>Open Cart</button>
      {isCartOpen && <Cart onClose={handleCloseCart} />}
    </div>
  );
};

export default Header;
