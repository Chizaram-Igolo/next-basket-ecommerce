import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { removeFromWishlist } from "@/lib/slices/wishListSlice";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ButtonMUI from "../ButtonMUI";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleRemoveFromWishlist = (productId: number) => {
    dispatch(removeFromWishlist(productId));
  };
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute right-[50%] z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-md overflow-y-auto">
        <div className="w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
          <div className="relative gap-8 bg-white p-7 ">
            <h2 className="text-lg font-bold pb-4">Wishlist</h2>
            {wishlistItems.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className="w-full relative flex flex-row text-sm py-2 border-t-2 border-b-1"
              >
                <div className="w-[60%]">
                  <div>{item.title} </div>

                  <div className="mt-2 mb-0 flex gap-2">
                    <ButtonMUI
                      text="Remove"
                      variant="contained"
                      size="small"
                      className="w-auto h-6  text-white text-center text-lg font-bold bg-sky-500 justify-center rounded-sm"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    />
                  </div>
                </div>

                <div className="w-[40%]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width="100px"
                    height="100px"
                    className="object-contain object-center w-full h-[80px] aspect-[0.77]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default Wishlist;
