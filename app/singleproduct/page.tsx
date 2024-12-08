import Image from "next/image";
import React from "react";
import product from "../../Public/product7.png";
import { inter } from "../fonts";
import { PiShoppingCart } from "react-icons/pi";

const page = () => {
  return (
    <div className={`${inter.className} max-w-7xl m-auto xl:px-32 px-5 mt-24`}>
      <div className="flex flex-wrap xl:flex-nowrap gap-16 justify-center text-center xl:justify-start xl:text-left">
        <div className="xl:w-3/4">
          <Image
            className="rounded-xl w-[800px] h-[500px]"
            src={product}
            alt="Product"
          ></Image>
        </div>
        <div className="xl:w-1/2 m-0 flex flex-col items-center xl:items-start">
          <h1 className="text-5xl font-bold">Library Stool Chair</h1>
          <p className="bg-primary py-1 px-2 font-medium my-6 text-lg text-white rounded-full inline-block">
            $20.00 USD
          </p>
          <p className="text-lg py-10 border-t ">
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

      <div className="flex justify-between mt-24">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <p className="text-lg font-bold underline underline-offset-4">
          View All
        </p>
      </div>

        <div className="flex flex-wrap xl:flex-nowrap justify-center mt-14 m-auto items-center xl:container gap-5">

        <div>
          <div
            className="group relative rounded w-52 h-52 bg-slate-200 bg-[url('/category.png')] bg-cover bg-center overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "right bottom",
            }}
          ></div>
          <div className="flex mt-3 justify-between items-center">
                <h2 className="">Library Stool Chair</h2>
                <p className="text-sm font-bold">$99</p>
          </div>
          </div>
          <div>
          <div
            className="group relative rounded w-52 h-52 bg-slate-200 bg-[url('/product1.png')] bg-cover bg-center overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "right bottom",
            }}
          ></div>
          <div className="flex mt-3 justify-between items-center">
                <h2 className="">Library Stool Chair</h2>
                <p className="text-sm font-bold">$99</p>
          </div>
          </div>

          <div>
          <div
            className="group relative rounded w-52 h-52 bg-slate-200 bg-[url('/product2.png')] bg-cover bg-center overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "right bottom",
            }}
          ></div>
          <div className="flex mt-3 justify-between items-center">
                <h2 className="">Library Stool Chair</h2>
                <p className="text-sm font-bold">$99</p>
          </div>
          </div>

          <div>
          <div
            className="group relative rounded w-52 h-52 bg-slate-200 bg-[url('/product3.png')] bg-cover bg-center overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "right bottom",
            }}
          ></div>
          <div className="flex mt-3 justify-between items-center">
                <h2 className="">Library Stool Chair</h2>
                <p className="text-sm font-bold">$99</p>
          </div>
          </div>

          <div>
          <div
            className="group relative rounded w-52 h-52 bg-slate-200 bg-[url('/product6.png')] bg-cover bg-center overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "right bottom",
            }}
          ></div>
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
