"use client"; // Mark this as a client component
import React, { useEffect, useState } from "react";
import { inter } from "@/app/fonts";
import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/ui/RelatedProducts";
import { ProductCards } from "@/typing";
import Link from "next/link";
import SingleProduct from "@/components/sections/SingleProduct";

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<ProductCards | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductCards[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product and related products
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch the current product
        const productQuery = `*[_type == "products" && slug.current == "${slug}"][0]{
          price,
          image,
          title,
          slug,
          _id,
          description,
          priceWithoutDiscount,
          "isDiscounted": priceWithoutDiscount > 0,
          "isNew": createdAt > now() - 30 * 24 * 60 * 60 * 1000,
          category->{title},
          tags
        }`;
        const productData = await client.fetch(productQuery);
        setProduct(productData);

        // Fetch related products based on category and tags
        if (productData) {
          const relatedProductsQuery = `*[_type == "products" && _id != "${productData._id}" && (category->title == "${productData.category.title}" || tags[] match "${productData.tags.join(",")}")]{
            price,
            image,
            title,
            slug,
            "isDiscounted": priceWithoutDiscount > 0,
            "isNew": createdAt > now() - 30 * 24 * 60 * 60 * 1000,
          }[0...5]`;
          const relatedProductsData = await client.fetch(relatedProductsQuery);
          setRelatedProducts(relatedProductsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return <div className="text-center py-10">Loading Product...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

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

      {/* Related Products */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto,auto] px-5 gap-5 mt-10">
        {relatedProducts.map((product: ProductCards, index: number) => (
          <RelatedProducts key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;