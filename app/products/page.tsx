import React from "react";
import { inter, roboto } from "../fonts";
import ProductCard from "@/components/ui/ProductCard";

const Products = () => {
  return (
    <div className={`${inter.className} max-w-7xl m-auto pt-16 -mb-28`}>
      <h2 className="heading xl:px-28 text-center">Our Products</h2>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <ProductCard
          image="public/product1.png"
          newPrice={20}
          name="Library Stool Chair"
          isNew={true}
        />
        <ProductCard
          image="/product7.png"
          newPrice={20}
          name="Library Stool Chair"
          isDiscount={true}
        />
        <ProductCard
          image="/product6.png"
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          image="/product5.png"
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          image="/category.png"
          newPrice={20}
          name="Library Stool Chair"
          isNew={true}
        />
        <ProductCard
          image="/product3.png"
          newPrice={20}
          name="Library Stool Chair"
          isDiscount={true}
        />
        <ProductCard
          image="/product2.png"
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          image="/product1.png"
          newPrice={20}
          name="Library Stool Chair"
        />

<ProductCard
          image="/product4.png"
          newPrice={20}
          name="Library Stool Chair"
          isNew={true}
        />
        <ProductCard
          image="/product7.png"
          newPrice={20}
          name="Library Stool Chair"
          isDiscount={true}
        />
        <ProductCard
          image="/product6.png"
          newPrice={20}
          name="Library Stool Chair"
        />
        <ProductCard
          image="/product5.png"
          newPrice={20}
          name="Library Stool Chair"
        />


      </div>


      <div className="bg-secondary flex flex-col justify-center items-center py-20 mt-28">
        <h3 className={`${roboto.className} font-medium text-2xl xl:text-4xl text-center pb-16`}>Or Subscribe To The Newsletter</h3>
        <div className="font-medium text-grey pb-16 flex  gap-5">
          <span className="border-b-2 border-black xl:min-w-[500px] w-full pb-2 flex"><p>Email Address...</p></span><span className="flex ml-5 pb-2 border-b-2 border-black">SUBMIT</span>
        </div>

        <h3 className={`${roboto.className} font-medium text-2xl xl:text-4xl  text-center pb-16`}>Follow Products And Discounts On Instagram</h3>
        
        <div className="flex flex-wrap xl:flex-nowrap justify-center items-center xl:container gap-5">
        <div
          className="group relative rounded-xl w-44 h-44 bg-slate-200 bg-[url('/category.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}>
        </div>

        <div
          className="group relative rounded-xl w-44 h-44 bg-slate-200 bg-[url('/product2.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}>
        </div>

        <div
          className="group relative rounded-xl w-44 h-44 bg-slate-200 bg-[url('/product3.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}>
        </div>

        <div
          className="group relative rounded-xl w-44 h-44 bg-slate-200 bg-[url('/product7.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}>
        </div>

        <div
          className="group relative rounded-xl w-44 h-44 bg-slate-200 bg-[url('/product6.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}>
        </div>

        <div
          className="group relative rounded-xl w-44 h-44 bg-slate-200 bg-[url('/category1.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}>
        </div>


        </div>
      </div>

    </div>
  );
};

export default Products;
