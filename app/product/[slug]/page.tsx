import React from "react";
import { inter } from "@/app/fonts";
import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/ui/RelatedProducts";
import { ProductCards } from "@/typing";
import Link from "next/link";
import SingleProduct from "@/components/sections/SingleProduct";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  // Query for Main Product
  const query = `*[_type == "product" && slug.current == "${slug}"]{
        price,
        featuredImage,
        title,
        _id,
        description,
        oldPrice,
        "isDiscounted": oldPrice > 0,
        "isNew": createdAt > now() - 30 * 24 * 60 * 60 * 1000,
}[0]`;
  const product = await client.fetch(query);

  // Query for Related Products
  const relatedProductsQuery = `*[_type == "product"]{
      price,
      featuredImage,
      title,
      slug,
      "isDiscounted": oldPrice > 0,
      "isNew": createdAt > now() - 30 * 24 * 60 * 60 * 1000,
    }`;
  const products = await client.fetch(relatedProductsQuery);

  const displayedProducts = products.slice(0, 5);
  

  return (
    <div className={`${inter.className} max-w-7xl m-auto xl:px-0 px-5 mt-24`}>
      <SingleProduct product={product} />

      <div className="flex justify-between mx-5 mt-24">
        <h2 className="text-2xl uppercase font-bold">Featured Products</h2>
        <Link href={"/products"}>
          <p className="text-lg font-bold underline underline-offset-4">
            View All
          </p>
        </Link>
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto,auto] px-5 gap-5 mt-10">
        {/* Map over products and pass each product to ProductCard */}
        {displayedProducts.map((product: ProductCards, index: number) => (
          <RelatedProducts key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
