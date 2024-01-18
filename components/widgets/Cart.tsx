import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { removeFromCart, updateQuantity } from "@/lib/slices/cartSlice";
import { ICartItem } from "@/app/types";
import Image from "next/image";

const Cart = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (id: number, title: string) =>
    dispatch(removeFromCart({ id, title }));

  const handleUpdateQuantity = (id: number, title: string, quantity: number) =>
    dispatch(updateQuantity({ id, title, quantity }));

  const groupedItems = items.reduce((acc, item) => {
    acc[item.title] = [...(acc[item.title] || []), item];
    return acc;
  }, {} as Record<string, ICartItem[]>);

  return (
    <div>
      <h2>Your Cart</h2>
      {Object.entries(groupedItems).map(([title, itemsWithTitle]) => (
        <div key={title}>
          <h3>{title}</h3>
          <ul>
            {itemsWithTitle.map(({ id, title, thumbnail, price, quantity }) => (
              <li key={`${id}-${title}`} className="relative">
                <Image
                  src={thumbnail}
                  alt={title}
                  layout="fill"
                  style={{
                    objectFit: "contain",
                  }}
                />
                <div>Price: ${price.toFixed(2)}</div>
                <div>Quantity: {quantity}</div>
                <button
                  onClick={() => handleUpdateQuantity(id, title, quantity - 1)}
                >
                  Decrease
                </button>
                <button
                  onClick={() => handleUpdateQuantity(id, title, quantity + 1)}
                >
                  Increase
                </button>
                <button onClick={() => handleRemoveItem(id, title)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p>
        Total: $
        {items
          .reduce((sum, { price, quantity }) => sum + price * quantity, 0)
          .toFixed(2)}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Cart;
