import Image from "next/image";
import React from "react";
import product from "../../Public/product7.png";
import { inter } from "../fonts";
import { PiShoppingCart } from "react-icons/pi";
import product1 from "../../Public/product1.png";
import product2 from "../../Public/product2.png";
import product3 from "../../Public/product3.png";
import product6 from "../../Public/product6.png";
import category from "../../Public/category.png";

const page = () => {
  return (
    <div className={`${inter.className} max-w-7xl m-auto xl:px-0 px-5 mt-24`}>
      <div className="flex flex-wrap xl:flex-nowrap gap-36 justify-center text-center xl:justify-start xl:text-left">
        {/* Product Image */}
        <div className="">
          <Image
            className="rounded-xl xl:ml-14 xl:w-[800px] xl:h-[550px]"
            src={product}
            alt="Product"
          ></Image>
        </div>
        {/* Product Details */}
        <div className="xl:w-1/2 m-0 flex flex-col items-center xl:items-start">
          <h1 className="text-5xl xl:w-96 font-bold">Library Stool Chair</h1>
          <p className="bg-primary py-1 px-2 font-medium my-6 text-lg text-white rounded-full inline-block">
            $20.00 USD
          </p>
          <p className="text-lg py-10 border-t text-[#7d7b8e]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <button className="flex gap-2 itmes-center xl:items-start bg-primary text-white hover:bg-accent px-6 rounded py-3">
            <PiShoppingCart className="text-2xl flex" />
            Add to Cart
          </button>
        </div>
        <div></div>
      </div>

      <div className="flex justify-between mx-5 mt-24">
        <h2 className="text-2xl uppercase font-bold">Featured Products</h2>
        <p className="text-lg font-bold underline underline-offset-4">
          View All
        </p>
      </div>

      {/* Related Products */}
      <div className="flex flex-wrap xl:flex-nowrap justify-center mt-14 m-auto items-center xl:container gap-5">
        <div>
          <div className="group relative rounded xs:h-[350px] xs:w-[350px] sm:w-96 sm:h-96 xl:w-60 xl:h-60 bg-slate-200 overflow-hidden">
            <Image src={category} alt="product" />
          </div>
          <div className="flex mt-3 justify-between items-center">
            <h2 className="">Library Stool Chair</h2>
            <p className="text-sm font-bold">$99</p>
          </div>
        </div>
        <div>
          <div className="group relative rounded xs:h-[350px] xs:w-[350px] sm:w-96 sm:h-96 xl:w-60 xl:h-60 bg-slate-200 overflow-hidden">
            <Image src={product1} alt="product" />
          </div>
          <div className="flex mt-3 justify-between items-center">
            <h2 className="">Library Stool Chair</h2>
            <p className="text-sm font-bold">$99</p>
          </div>
        </div>

        <div>
          <div className="group relative rounded xs:h-[350px] xs:w-[350px] sm:w-96 sm:h-96 xl:w-60 xl:h-60 bg-slate-200 overflow-hidden">
            <Image src={product2} alt="product" />
          </div>
          <div className="flex mt-3 justify-between items-center">
            <h2 className="">Library Stool Chair</h2>
            <p className="text-sm font-bold">$99</p>
          </div>
        </div>

        <div>
          <div className="group relative rounded xs:h-[350px] xs:w-[350px] sm:w-96 sm:h-96 xl:w-60 xl:h-60 bg-slate-200 overflow-hidden">
            <Image src={product3} alt="product" />
          </div>
          <div className="flex mt-3 justify-between items-center">
            <h2 className="">Library Stool Chair</h2>
            <p className="text-sm font-bold">$99</p>
          </div>
        </div>

        <div>
          <div className="group relative rounded xs:h-[350px] xs:w-[350px] sm:w-96 sm:h-96 xl:w-60 xl:h-60 bg-slate-200 overflow-hidden">
            <Image src={product6} alt="product" />
          </div>
          <div className="flex mt-3 justify-between items-center">
            <h2 className="">Library Stool Chair</h2>
            <p className="text-sm font-bold">$99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
