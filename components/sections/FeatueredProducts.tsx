import React from 'react'
import ProductCard from '../ui/ProductCard'
import { inter } from '@/app/fonts'
import product1 from "../../Public/product1.png"
import product5 from "../../Public/product5.png"
import product6 from "../../Public/product6.png"
import product7 from "../../Public/product7.png"


const FeatueredProducts = () => {
  return (
    <section className={`${inter.className} xl:px-5 pt-16`}>
    <h2 className='heading text-center px-2 xl:text-left xl:px-28'>Featured Products</h2>
    <div className='container flex flex-wrap xl:flex-nowrap justify-center items-center gap-5'>
        <ProductCard pImage={product1} newPrice={20} name='Library Stool Chair' isNew={true}  />
        <ProductCard pImage={product7} newPrice={20} name='Library Stool Chair' isDiscount={true}/>
        <ProductCard pImage={product6} newPrice={20} name='Library Stool Chair' />
        <ProductCard pImage={product5} newPrice={20} name='Library Stool Chair' />

    </div>
    </section>
  )
}

export default FeatueredProducts