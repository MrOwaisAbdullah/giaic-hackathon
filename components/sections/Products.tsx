import React from 'react'
import ProductCard from '../ui/ProductCard'
import { inter } from '@/app/fonts'
import product1 from "../../Public/product1.png"
import product2 from "../../Public/product2.png"
import product3 from "../../Public/product3.png"
import product4 from "../../Public/product4.png"
import product5 from "../../Public/product5.png"
import product6 from "../../Public/product6.png"
import product7 from "../../Public/product7.png"

const Products = () => {
  return (
    <section className={`${inter.className} flex flex-col justify-center px-5 xl:px-0 mt-36`}>
    <h2 className='heading text-center px-2 xl:px-0'>Our Products</h2>
    <div className='grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto] px-10 xl:px-20 gap-5 justify-content-center'>
      {/* Product Cards */}
        <ProductCard pImage={product1} newPrice={20} name='Library Stool Chair' isNew={true}  />
        <ProductCard pImage={product7} newPrice={20} name='Library Stool Chair' isDiscount={true}/>
        <ProductCard pImage={product6} newPrice={20} name='Library Stool Chair' />
        <ProductCard pImage={product5} newPrice={20} name='Library Stool Chair' />
        <ProductCard pImage={product4} newPrice={20} name='Library Stool Chair' isNew={true}  />
        <ProductCard pImage={product3} newPrice={20} name='Library Stool Chair' isDiscount={true}/>
        <ProductCard pImage={product2} newPrice={20} name='Library Stool Chair' />
        <ProductCard pImage={product1} newPrice={20} name='Library Stool Chair' />
    </div>
    </section>
)
}

export default Products