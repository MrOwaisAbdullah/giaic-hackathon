"use client";

import { useCart } from "@/app/context/CartContext";
import { PiShoppingCart } from "react-icons/pi";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Products } from "@/typing";
import { useNotifications } from "@/app/context/NotificationContext"; // Import the notifications context
import SocialSharing from "../ui/SocialSharing";

const SingleProduct = ({ product }: { product: Products }) => {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const productUrl = `${window.location.origin}/products/${product.slug?.current}`;


  // Use the notifications context
  const { addNotification } = useNotifications();

  // Quantity change handler
  const handleQuantityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value < 1 ? 1 : value);
  }, []);

  // Add to cart handler
  const handleAddToCart = useCallback(() => {
    setIsLoading(true);
    try {
      dispatch({
        type: "ADD_TO_CART",
        product: {
          _id: product._id,
          title: product.title,
          price: product.price,
          image: urlFor(product.image).url(),
          quantity: quantity,
        },
      });

      // Trigger a success notification
      addNotification("Added to cart successfully!", "success");
      setQuantity(1); // Reset quantity after adding
    } catch (error) {
      // Trigger an error notification
      addNotification("Failed to add to cart. Please try again.", "error");
      console.error(error);
    } finally {
      setIsLoading(false); // End loading state
    }
  }, [dispatch, product, quantity, addNotification]);

  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-36 justify-center text-center xl:justify-start xl:text-left">
      {/* Product Image */}
      <div className="">
        <Image
          className="rounded-xl xl:ml-14 xl:w-[800px] xl:h-[550px] object-cover"
          src={urlFor(product.image).url()}
          alt={product.title}
          priority
          width={2000}
          height={2000}
        ></Image>
      </div>
      {/* Product Details */}
      <div className="xl:w-1/2 m-0 flex flex-col items-center xl:items-start">
        <h1 className="text-5xl xl:w-96 font-bold">{product.title}</h1>
        <p className="bg-primary py-1 px-3 font-medium my-6 text-lg text-white rounded-full inline-block">
          ${product.price} USD
        </p>
        <p className="text-lg py-10 border-t text-[#7d7b8e]">
          {product.description}
        </p>
        <div className="flex items-center gap-4 mb-3">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="border rounded px-3 py-1 w-20"
          />
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className={`flex gap-2 items-center bg-primary text-white px-6 rounded py-3 
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'}`}
        >
          <PiShoppingCart className="text-2xl" />
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>
                    {/* Social Sharing Component */}
                    <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Share this product:</h3>
        <SocialSharing productUrl={productUrl} productTitle={product.title} />
      </div>
      </div>
    </div>
  );
};

export default SingleProduct;