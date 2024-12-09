import React from "react";
import { inter, roboto } from "../fonts";
import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import product1 from "@/Public/product1.png"
import product2 from "@/Public/product2.png"
import product3 from "@/Public/product3.png"
import product4 from "@/Public/product4.png"
import product5 from "@/Public/product5.png"
import product6 from "@/Public/product6.png"
import product7 from "@/Public/product7.png"
import category from "@/Public/category.png"
import category1 from "@/Public/category1.png"

const Products = () => {
  return (
    <div className={`${inter.className} xl:px-20 max-w-7xl m-auto pt-16 -mb-28`}>
      <h2 className="heading xl:px-28 text-center">Our Products</h2>
      <div className="flex flex-wrap justify-center px-6 items-center gap-5">
        <ProductCard
          pImage={product1}
          newPrice={20}
          name="Library Stool Chair"
          isNew={true}
        />
        <ProductCard
          pImage={product7}
          newPrice={20}
          name="Library Stool Chair"
          isDiscount={true}
        />
        <ProductCard
          pImage={product6}
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          pImage={product5}
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          pImage={category}
          newPrice={20}
          name="Library Stool Chair"
          isNew={true}
        />
        <ProductCard
          pImage={product3}
          newPrice={20}
          name="Library Stool Chair"
          isDiscount={true}
        />
        <ProductCard
          pImage={product2}
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          pImage={product1}
          newPrice={20}
          name="Library Stool Chair"
        />

<ProductCard
          pImage={product4}
          newPrice={20}
          name="Library Stool Chair"
          isNew={true}
        />
        <ProductCard
          pImage={product7}
          newPrice={20}
          name="Library Stool Chair"
          isDiscount={true}
        />
        <ProductCard
          pImage={product6}
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          pImage={product5}
          newPrice={20}
          name="Library Stool Chair"
        />


      </div>


      <div className=" bg-secondary flex flex-col justify-center items-center py-20 mt-28">
        <h3 className={`${roboto.className} font-medium text-2xl xl:text-4xl text-center pb-16`}>Or Subscribe To The Newsletter</h3>
        <div className="font-medium text-grey pb-16 flex  gap-5">
          <span className="border-b-2 border-black xl:min-w-[500px] w-full pb-2 flex"><p>Email Address...</p></span><span className="flex ml-5 pb-2 border-b-2 border-black">SUBMIT</span>
        </div>

        <h3 className={`${roboto.className} font-medium text-2xl xl:text-4xl  text-center pb-16`}>Follow Products And Discounts On Instagram</h3>
        
        <div className="flex flex-wrap xl:flex-nowrap xl:px-20 justify-center items-center gap-5">
        <div
          className="group relative rounded-xl h-32 w-36 bg-slate-200 overflow-hidden">
            <Image src={category} alt="product"/>
        </div>

        <div
          className="group relative rounded-xl h-32 w-36 bg-slate-200 overflow-hidden">
            <Image src={product2} alt="product"/>
        </div>

        <div
          className="group relative rounded-xl h-32 w-36 bg-slate-200 overflow-hidden">
            <Image src={product3} alt="product"/>
        </div>

        <div
          className="group relative rounded-xl h-32 w-36 bg-slate-200 overflow-hidden">
            <Image src={product7} alt="product"/>
        </div>

        <div
          className="group relative rounded-xl h-32 w-36 bg-slate-200 overflow-hidden">
            <Image src={product6} alt="product"/>
        </div>

        <div
          className="group relative rounded-xl h-32 w-36 bg-slate-200 overflow-hidden">
            <Image src={category1} alt="product"/>
        </div>


        </div>
      </div>

    </div>
  );
};

export default Products;
