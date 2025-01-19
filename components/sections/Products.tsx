import React from 'react'
import ProductCard from '../ui/ProductCard'
import { inter } from '@/app/fonts'
import { client } from '@/sanity/lib/client'
import { ProductCards, ProductsSectionProps } from '@/typing'

const Products = async ({ limit }: ProductsSectionProps) => {

  const query = `*[_type == "products"] {
    price,
    image,
    title,
    slug,
    _id,
    priceWithoutDiscount,
    "isDiscounted": priceWithoutDiscount > 0,
    "isNew": dateTime(createdAt) > dateTime(now()) - 7 * 24 * 60 * 60 * 1000,
  }`
  const products = await client.fetch(query);
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className={`${inter.className} flex flex-col justify-center mt-36`}>
    <h2 className='heading text-center px-2 xl:px-0'>Our Products</h2>
    <div className='grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto] gap-5 px-10 xl:px-0 justify-content-center'>
        {/* Map over products and pass each product to ProductCard */}
        {displayedProducts.map((product: ProductCards, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
        
    </div>
    </section>
)
}

export default Products