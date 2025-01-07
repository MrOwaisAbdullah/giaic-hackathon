"use client"

import React, { useState } from "react";
import { inter } from "../../app/fonts";
import { PiShoppingCart } from "react-icons/pi";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ProductCards } from "@/typing";
import { useCart } from "@/app/context/CartContext";
import { Toast } from "./Toast";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductCards }) => {

  const { dispatch } = useCart();
    const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    dispatch({
          type: "ADD_TO_CART",
          product: {
            _id: product._id, // Correct field
            name: product.title, 
            price: product.price,
            featuredImage: urlFor(product.featuredImage).url(),
            quantity: 1, // Default quantity is 1
            description: product.description,
          },
        });

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <div
      className={`${inter.className} relative flex flex-col cursor-pointer group mt-5`}
    >
      <div className="cursor-pointer z-0 relative group bg-gray-200 sm:max-h-64 rounded overflow-hidden">
        <div
          className={`${
            (product?.isDiscounted) || (product?.isNew)
              ? "flex justify-between"
              : "flex justify-end"
          }`}
        >
          {/* Dynamically add Product Image */}
          <Link href={`/product/${product?.slug.current}`}>
          <Image
            className="object-cover hover:scale-110 duration-200 overflow-hidden min-h-64 md:max-h-64"
            src={urlFor(product.featuredImage).url()}
            alt={product?.title || "Product image"}
            width={500}
            height={1000}
          />
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
                ? product?.isDiscounted ? "bg-highlight2 absolute top-10 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center" : "bg-highlight2 absolute top-3 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
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
                product?.oldPrice
                  ? "text-sm text-[#9A9CAA] pl-1 line-through"
                  : "hidden"
              }`}
            >{`$${product?.oldPrice}`}</p>
          </div>
        </div>
        <div className="flex bg-secondary p-2 justify-end rounded-[8px] hover:bg-primary cursor-pointer hover:text-white ">
          <button onClick={handleAddToCart}><PiShoppingCart className="text-xl flex" /></button>
        </div>
      </div>
            {showToast && (
              <Toast
                message="Added to cart successfully!"
                type="success"
                onClose={() => setShowToast(false)}
              />
            )}
    </div>
  );
};

export default ProductCard;
