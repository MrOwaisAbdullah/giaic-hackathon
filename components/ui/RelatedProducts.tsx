import { urlFor } from "@/sanity/lib/image";
import { ProductCards } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProducts = ({ product }: { product: ProductCards }) => {
  return (
    <div className="relative flex flex-col cursor-pointer group md:max-w-full md:min-w-full mt-5">
      <div className="cursor-pointer z-0 relative group md:max-w-full bg-gray-200 rounded overflow-hidden">
      <Link href={`/product/${product.slug.current}`}>
        <Image
          className="object-cover min-h-56 md:max-h-56 hover:scale-110 duration-200 overflow-hidden"
          src={urlFor(product.image).url()}
          height={300}
          width={300}
          alt={product.title}
        />
        </Link>
      </div>
      <div className="flex mt-3 justify-between items-center">
        <Link href={`/product/${product.slug.current}`}>
          <h2 className="">{product.title}</h2>
        </Link>
        <p className="text-sm font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default RelatedProducts;
