"use client";

import React from "react";
import { inter } from "../../app/fonts";
import { PiShoppingCart } from "react-icons/pi";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ProductCards } from "@/typing";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { useNotifications } from "@/app/context/NotificationContext";

const ProductCard = ({ product }: { product: ProductCards }) => {
  const { dispatch } = useCart();

  // Use the notifications context
  const { addNotification } = useNotifications();

  const handleAddToCart = () => {
    try {
      dispatch({
        type: "ADD_TO_CART",
        product: {
          _id: product._id, 
          title: product.title,
          price: product.price,
          image: product.image ? urlFor(product.image).url() : null,
          quantity: 1, // Default quantity is 1
        },
      });

      // Trigger a success notification
      addNotification("Added to cart successfully!", "success");
    } catch (error) {
      // Trigger an error notification
      addNotification("Failed to add to cart. Please try again.", "error");
      console.error(error);
    }
  };

  return (
    <div
      className={`${inter.className} relative flex flex-col cursor-pointer group mt-5`}
    >
      <div className="cursor-pointer z-0 relative group bg-gray-200 sm:max-h-64 rounded overflow-hidden">
        <div
          className={`${
            product?.isDiscounted || product?.isNew
              ? "flex justify-between"
              : "flex justify-end"
          }`}
        >
          {/* Dynamically add Product Image */}
          <Link href={`/product/${product?.slug.current}`}>
            {product.image ? (
              <Image
                className="object-cover hover:scale-110 duration-200 overflow-hidden min-h-64 md:max-h-64"
                src={urlFor(product.image).url()}
                alt={product?.title || "Product image"}
                width={500}
                height={1000}
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center">No Image Available</p>
              </div>
            )}
          </Link>
          {/* dynamically add the New or Discount Tag if they are provided */}
          <div
            className={`${
              product?.isDiscounted
                ? "bg-highlight absolute top-3 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            SALE!
          </div>
          <div
            className={`${
              product?.isNew
                ? product?.isDiscounted
                  ? "bg-highlight2 absolute top-10 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                  : "bg-highlight2 absolute top-3 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            NEW
          </div>
        </div>
      </div>

      {/* Dynamically adding Product Name, new Prices and old price, if the old price is not provided dont show it  */}
      <div className="relative flex items-center justify-between mt-3">
        <div className="flex flex-col p-0 justify-left text-left">
          <Link href={`/product/${product.slug.current}`}>
            <h2 className="group-hover:text-primary mb-1">{product?.title}</h2>
          </Link>
          <div className="flex gap-1 items-center -mt-1">
            <p className="text-lg font-semibold">{`$${product?.price}`}</p>
            <p
              className={`${
                product?.priceWithoutDiscount
                  ? "text-sm text-[#9A9CAA] pl-1 line-through"
                  : "hidden"
              }`}
            >{`$${product?.priceWithoutDiscount}`}</p>
          </div>
        </div>
        <div className="flex bg-secondary p-2 justify-end rounded-[8px] hover:bg-primary cursor-pointer hover:text-white ">
          <button onClick={handleAddToCart}>
            <PiShoppingCart className="text-xl flex" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;