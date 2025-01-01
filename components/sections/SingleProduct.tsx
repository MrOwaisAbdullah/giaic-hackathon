"use client"; 

import { useCart } from "@/app/context/CartContext";
import { PiShoppingCart } from "react-icons/pi";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ProductCards } from "@/typing";
import { Toast } from "@/components/ui/Toast";
import { useCallback } from "react";

const SingleProduct = ({ product }: { product: ProductCards }) => {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

   // Quantity change handler with useCallback
   const handleQuantityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value < 1 ? 1 : value);
  }, []);

  // Add to cart handler with useCallback
  const handleAddToCart = useCallback(() => {
    // Set loading state
    setIsLoading(true);
    try {
      dispatch({
        type: "ADD_TO_CART",
        product: {
          _id: product._id,
          name: product.title,
          price: product.price,
          featuredImage: urlFor(product.featuredImage).url(),
          quantity: quantity,
          description: product.description,
        },
      });

      setShowToast(true);
      setQuantity(1);  // Reseting quantity after adding
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setShowToast(true);
      console.error(error);
      // You would want to add error handling Toast component
    } finally {
      setIsLoading(false);  // End loading state
    }
  }, [dispatch, product, quantity]);


  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-36 justify-center text-center xl:justify-start xl:text-left">
      {/* Product Image */}
      <div className="">
        <Image
          className="rounded-xl xl:ml-14 xl:w-[800px] xl:h-[550px] object-cover"
          src={urlFor(product.featuredImage).url()}
          alt={product.title}
          priority  
          width={1000}
          height={1000}
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

export default SingleProduct;


