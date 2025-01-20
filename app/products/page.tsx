// app/products/page.tsx
import React, { Suspense } from "react"; // Import Suspense
import { inter, roboto } from "../fonts";
import Image from "next/image";
import product2 from "@/Public/product2.png";
import product3 from "@/Public/product3.png";
import product6 from "@/Public/product6.png";
import product7 from "@/Public/product7.png";
import category from "@/Public/category.png";
import category1 from "@/Public/category1.png";
import { getCategories, getProducts, getSellers } from "@/sanity/lib/client";
import ProductsClientWrapper from "@/components/sections/ProductsWrapper";

const Products = async () => {
  // Fetch all products, categories, and sellers
  const categories = await getCategories();
  const products = await getProducts(); 
  const sellers = await getSellers();
  return (
    <div className={`${inter.className} max-w-7xl m-auto pt-16 -mb-28`}>
      <h2 className="heading xl:px-28 text-center">Our Products</h2>
      {/* Wrap ProductsClientWrapper in Suspense */}
      <div className="mx-3">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductsClientWrapper
            sellers={sellers}
            categories={categories}
            products={products}
          />
        </Suspense>
      </div>
      {/* Bottom Call to Action */}
      <div className="bg-secondary flex flex-col justify-center items-center py-20 mt-28">
        <h3
          className={`${roboto.className} font-medium text-2xl lg:text-4xl text-center pb-16`}
        >
          Or Subscribe To The Newsletter
        </h3>
        <div className="font-medium justify-center text-grey pb-16 flex gap-5">
          <span className="border-b-2 border-black min-w-full lg:min-w-[500px] w-full pb-2 flex">
            <p>Email Address...</p>
          </span>
          <span className="flex ml-5 pb-2 border-b-2 border-black">SUBMIT</span>
        </div>
        <h3
          className={`${roboto.className} font-medium text-2xl lg:text-4xl text-center pb-16`}
        >
          Follow Products And Discounts On Instagram
        </h3>
        {/* Product Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[repeat(6,auto)] px-20 md:px-5 gap-5">
          <div className="group relative rounded-xl h-96 sm:h-32 sm:w-36 bg-slate-200 overflow-hidden">
            <Image src={category} alt="product" />
          </div>
          <div className="group relative rounded-xl h-96 sm:h-32 sm:w-36 bg-slate-200 overflow-hidden">
            <Image src={product2} alt="product" />
          </div>
          <div className="group relative rounded-xl h-96 sm:h-32 sm:w-36 bg-slate-200 overflow-hidden">
            <Image src={product3} alt="product" />
          </div>
          <div className="group relative rounded-xl h-96 sm:h-32 sm:w-36 bg-slate-200 overflow-hidden">
            <Image src={product7} alt="product" />
          </div>
          <div className="group relative rounded-xl h-96 sm:h-32 sm:w-36 bg-slate-200 overflow-hidden">
            <Image src={product6} alt="product" />
          </div>
          <div className="group relative rounded-xl h-96 sm:h-32 sm:w-36 bg-slate-200 overflow-hidden">
            <Image src={category1} alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;