import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { removeFromCart, updateQuantity } from "@/lib/slices/cartSlice";
import { ICartItem } from "@/app/types";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import ButtonMUI from "../ButtonMUI";

const Cart = () => {
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
      <Popover.Panel className="absolute right-[50%] z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-md overflow-y-auto">
        <div className="w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
          <div className="relative gap-8 bg-white p-7">
            <h2 className="text-lg font-bold pb-4">Cart</h2>
            {Object.entries(groupedItems).map(([title, itemsWithTitle]) => (
              <div key={title} className="py-2 border-t-2 border-b-1">
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
              className="flow-root rounded-md px-2 pt-4 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
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

export default Cart;
