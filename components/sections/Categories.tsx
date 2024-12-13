import { inter } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import product4 from "../../Public/product4.png"
import category from "../../Public/category.png"
import category1 from "../../Public/category1.png"


const Categories = () => {
  return (
    <section className={`${inter.className} px-5 xl:px-0 mt-36`}>
      <h2 className="heading text-center xl:text-left xl:px-0">Top categories</h2>
      <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-5">
      <div
          className="relative bg-slate-200 rounded-[10px] h-[400px] w-[400px] overflow-hidden">
            <Image src={product4} alt='product'/>
          <div className="absolute w-full bottom-0 left-0 rounded-b-[10px] text-white flex flex-col text-left p-2 px-4 justify-center bg-black/60">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="relative bg-slate-200 rounded-[10px] h-[400px] w-[400px] overflow-hidden">
            <Image src={category} alt='product'/>
          <div className="absolute w-full bottom-0 left-0 rounded-b-[10px] text-white flex flex-col text-left p-2 px-4 justify-center bg-black/60">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="relative bg-slate-200 rounded-[10px] h-[400px] w-[400px] overflow-hidden">
            <Image src={category1} alt='product'/>
          <div className="absolute w-full bottom-0 left-0 rounded-b-[10px] text-white flex flex-col text-left p-2 px-4 justify-center bg-black/60">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Categories;
