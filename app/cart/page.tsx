import Image from "next/image";
import React from "react";
import product1 from "../../Public/product6.png";
import product2 from "../../Public/product2.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { inter } from "../fonts";

const Cart = () => {
  return (
    <div
      className={`${inter.className} overflow-hidden flex flex-wrap xl:flex-nowrap gap-16 my-20 max-w-7xl m-auto`}
    >
      {/* Cart Products */}
      <div className="flex flex-col xl:w-[65%] w-full ">
        <div className="">
          <h2 className="text-xl font-medium my-3">Bag</h2>
          <div className="flex w-full justify-between">
            <div className="flex gap-5 border-b w-full pb-10">
              <Image className="w-32 h-32 " src={product1} alt="Product" />
              <div className="gap-2 flex flex-col">
                <div className="flex justify-between items-center">
                  <h2 className="text-accent mr-14 md:mr-96 xl:mr-60">
                    Library Stool Chair
                  </h2>
                  <div className="text-[15px]">MRP:$99</div>
                </div>
                <p className="text-[15px] text-[#757575]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-[15px] text-[#757575]">
                  Size &nbsp;L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity
                  &nbsp;2
                </p>
                <div className="flex gap-4 mt-1 text-accent text-lg">
                  <FiHeart />
                  <RiDeleteBinLine />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mt-10 justify-between">
            <div className="flex gap-5 border-b w-full pb-10">
              <Image className="w-32 h-32 " src={product2} alt="Product" />
              <div className="gap-2 flex flex-col">
                <div className="flex justify-between items-center">
                  <h2 className="text-accent mr-14 md:mr-96 xl:mr-60">
                    Library Stool Chair
                  </h2>
                  <div className="text-[15px]">MRP:$99</div>
                </div>
                <p className="text-[15px] text-[#757575]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-[15px] text-[#757575]">
                  Size &nbsp;L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity
                  &nbsp;2
                </p>
                <div className="flex gap-4 mt-1 text-accent text-lg">
                  <FiHeart />
                  <RiDeleteBinLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amount */}
      <div className="text-[#111111] xl:w-[35%] w-full flex flex-col gap-5">
        <h2 className="text-xl font-medium my-3">Summary</h2>
        <div className="flex justify-between text-sm w-full ">
          <p>Subtotal</p>
          <p className="font-medium">$198.00</p>
        </div>
        <div className="flex justify-between text-sm w-full ">
          <p>Estimated Delivery & Handling</p>
          <p className="font-medium">Free</p>
        </div>
        <div className="flex justify-between border-b border-t py-3 text-sm w-full ">
          <p>Total</p>
          <p className="font-medium">$198.00</p>
        </div>
        <button className="bg-primary text-white text-sm hover:bg-accent rounded-full py-3">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
