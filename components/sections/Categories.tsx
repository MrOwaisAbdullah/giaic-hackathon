import { inter } from "@/app/fonts";
import React from "react";

const Categories = () => {
  return (
    <section className={`${inter.className} px-5 pt-16`}>
      <h2 className="heading text-center xl:text-left xl:px-28">Top categories</h2>
      <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-5">
        <div
          className="relative bg-slate-200 rounded-[10px] bg-[url('/product4.png')] h-[350px] w-[350px] bg-cover bg-center"
          style={{
            backgroundSize: "100% 140%",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute w-full bottom-0 left-0 rounded-b-[10px] text-white flex flex-col text-left p-2 px-4 justify-center bg-black/60">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="relative bg-slate-200 rounded-[10px] bg-[url('/category.png')] h-[350px] w-[350px] bg-cover bg-center"
          style={{
            backgroundSize: "130% 150%",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute w-full bottom-0 left-0 rounded-b-[10px] text-white flex flex-col text-left p-2 px-4 justify-center bg-black/60">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="relative bg-slate-200 rounded-[10px] bg-[url('/category1.png')] h-[350px] w-[350px] bg-cover bg-center"
          style={{
            backgroundSize: "160% 110%",
            backgroundPosition: "right bottom",
          }}
        >
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
