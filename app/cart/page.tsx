"use client";

import Image from "next/image";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { inter } from "../fonts";
import { useCart } from "@/app/context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const handleQuantityChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    if (value < 1) return; // Don't allow quantities less than 1
    dispatch({ type: "UPDATE_QUANTITY", id, quantity: value });
  };

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1), // Default to 1 if undefined
    0
  );

  return (
    <div
      className={`${inter.className} overflow-hidden flex flex-wrap xl:flex-nowrap xl:px-0 px-8 gap-16 my-20 max-w-7xl m-auto`}
    >
      {/* Cart Products */}
      <div className="flex flex-col xl:w-[65%] w-full">
        <div className="">
          <h2 className="text-xl font-medium my-3">Bag</h2>
          {state.cart.length > 0 ? (
            <div className="flex flex-col justify-between">
              <div className="flex flex-col w-full pb-10 items-center justify-center">
                {state.cart.map((item) => (
                  
                  <div
                    className="flex gap-5 border-b w-full py-5"
                    key={item._id}
                  >
                    {item.image ? (
                                  <Image
                                  className="mt-2 sm:mt-0 w-28 h-28 object-cover rounded-lg"
                                  src={urlFor(item.image).url()}
                                  alt={item.title}
                                  width={100}
                                  height={100}
                                />
                                ) : (
                                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-500 text-center">No Image Available</p>
                                  </div>
                                )}
                    
                    <div className="gap-1 sm:gap-3 w-full flex flex-col">
                      <div className="flex flex-col sm:flex-row justify-between gap-1">
                        <h2 className="text-accent">{item.title}</h2>
                        <div className="text-[15px]">MRP: ${item.price}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="text-sm text-gray-600">
                          Quantity:
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item._id, e)}
                          className="border rounded px-2 w-20"
                        />
                      </div>

                      <div className="flex gap-4 mt-1 text-accent text-lg">
                        <button>
                          <FiHeart />
                        </button>
                        <button onClick={() => handleRemove(item._id)}>
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>

      {/* Amount */}
      <div className="text-[#111111] xl:w-[35%] w-full flex flex-col gap-5">
        <h2 className="text-xl font-medium my-3">Summary</h2>
        <div className="flex justify-between text-sm w-full ">
          <p>Subtotal</p>
          <p className="font-medium">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm w-full ">
          <p>Estimated Delivery & Handling</p>
          <p className="font-medium">Free</p>
        </div>
        <div className="flex justify-between border-b border-t py-3 text-sm w-full ">
          <p>Total</p>
          <p className="font-medium">${totalPrice.toFixed(2)}</p>
        </div>
        <Link className="" href="/checkout">
          <button className="bg-primary w-full text-white text-sm hover:bg-accent rounded-full py-3">
            Member Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
