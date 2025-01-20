import React from "react";
import { inter } from "@/app/fonts";
import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/ui/RelatedProducts";
import { ProductCards } from "@/typing";
import Link from "next/link";
import SingleProduct from "@/components/sections/SingleProduct";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";

// Fetch product data
const fetchProduct = async (slug: string) => {
  const query = `*[_type == "products" && slug.current == "${slug}"]{
    price,
    image,
    title,
    slug,
    _id,
    description,
    priceWithoutDiscount,
    "isDiscounted": priceWithoutDiscount > 0,
    "isNew": createdAt > now() - 30 * 24 * 60 * 60 * 1000,
  }[0]`;
  return await client.fetch(query);
};

// Generate metadata for the product page
export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const product = await fetchProduct(slug);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: urlFor(product.image).url(), 
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [urlFor(product.image).url()],
    },
  };
};

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const product = await fetchProduct(slug);

  // Query for Related Products
  const relatedProductsQuery = `*[_type == "products"]{
    price,
    image,
    title,
    slug,
    "isDiscounted": priceWithoutDiscount > 0,
    "isNew": createdAt > now() - 30 * 24 * 60 * 60 * 1000,
  }`;
  const products = await client.fetch(relatedProductsQuery);
  const displayedProducts = products.slice(0, 5);

  return (
    <div className={`${inter.className} max-w-7xl m-auto xl:px-0 px-5 mt-24`}>
      <SingleProduct product={product} />

      <div className="flex justify-between mx-5 mt-24">
        <h2 className="text-2xl uppercase font-bold">Related Products</h2>
        <Link href={"/products"}>
          <p className="text-lg font-bold underline underline-offset-4">
            View All
          </p>
        </Link>
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto,auto] px-5 gap-5 mt-10">
        {displayedProducts.map((product: ProductCards, index: number) => (
          <RelatedProducts key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;