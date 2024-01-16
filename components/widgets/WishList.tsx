import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { removeFromWishlist } from "@/lib/slices/wishListSlice";
interface WishlistProps {
  onClose: () => void;
}

const Wishlist: React.FC<WishlistProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleRemoveFromWishlist = (productId: number) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div>{item.title}</div>
            <div>Price: ${item.price.toFixed(2)}</div>
            <button onClick={() => handleRemoveFromWishlist(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close Wishlist</button>
    </div>
  );
};

export default Wishlist;
