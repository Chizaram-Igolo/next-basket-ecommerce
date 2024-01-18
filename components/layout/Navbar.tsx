"use client";

import { useEffect, useState } from "react";
import Cart from "../widgets/Cart";
import Wishlist from "../widgets/WishList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { removeFromCart, updateQuantity } from "@/lib/slices/cartSlice";
import { ICartItem } from "@/app/types";
import ButtonMUI from "../ButtonMUI";

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
            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="mt-[0.8] text-sky-500 text-center text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap mr-4">
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
            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
          />
        </div>

        <div className="relative items-stretch self-center inline-flex gap-1.5 my-auto p-4 rounded-[37px] cursor-pointer">
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center`}
                >
                  {/* <span>Solutions</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "text-orange-300" : "text-orange-300/70"
                    }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                    aria-hidden="true"
                  /> */}

                  <Image
                    loading="lazy"
                    src="/cart-icon.svg"
                    alt="Cart Icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16px", height: "16px" }}
                    className="mt-1 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="text-sky-500 text-center text-xs leading-4 tracking-wide">
                    {cartItemCount}
                  </span>
                </Popover.Button>

                <Example />
              </>
            )}
          </Popover>
        </div>

        {/* <div
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
        </div> */}
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

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
];

const Example = () => {
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
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute right-[50%] z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-md">
        <div className="w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
          <div className="relative gap-8 bg-white p-7">
            {Object.entries(groupedItems).map(([title, itemsWithTitle]) => (
              <div key={title} className="py-2 border-b-2">
                {itemsWithTitle.map(
                  ({ id, title, thumbnail, price, quantity }) => (
                    <div
                      key={`${id}-${title}`}
                      className="w-full relative flex flex-row text-sm"
                    >
                      <div className="w-[60%]">
                        <div className="ml-0">
                          <p className="text-sm font-bold text-gray-900">
                            {title}
                          </p>
                        </div>
                        <div>
                          Price: ${price.toFixed(2)} x {quantity}
                        </div>
                        <div className="mt-2 mb-0 flex gap-2">
                          <ButtonMUI
                            text="-"
                            variant="contained"
                            size="small"
                            className="w-auto h-6  text-white text-center text-lg font-bold bg-sky-500 justify-center rounded-sm"
                            onClick={() =>
                              handleUpdateQuantity(id, title, quantity - 1)
                            }
                          />

                          <ButtonMUI
                            text="+"
                            variant="contained"
                            size="small"
                            className="w-auto h-6 px-2  text-white text-center text-lg font-bold  bg-sky-500 justify-center rounded-sm"
                            onClick={() =>
                              handleUpdateQuantity(id, title, quantity + 1)
                            }
                          />

                          <ButtonMUI
                            text="Remove"
                            variant="contained"
                            size="small"
                            className="w-20 h-6 px-2  text-white text-center text-xs font-bold  bg-sky-500 self-stretch grow justify-center rounded-sm"
                            onClick={() => handleRemoveItem(id, title)}
                          />
                        </div>
                      </div>

                      <div className="w-[40%] h-[80px] justify-center ">
                        <img
                          src={thumbnail}
                          alt={title}
                          width="100px"
                          height="100px"
                          className="object-contain object-center w-full h-[80px] aspect-[0.77]"
                          // style={{
                          //   objectFit: "contain",
                          // }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-4 pb-4 -mt-5">
            <a
              href="##"
              className="flow-root rounded-md px-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
            >
              <p>
                Total:{" "}
                <span className="font-bold">
                  {" "}
                  $
                  {items
                    .reduce(
                      (sum, { price, quantity }) => sum + price * quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </p>
            </a>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
//       </>
//     )}
//   </Popover>
// </div>

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
