import React from 'react'
import ProductCard from '../ui/ProductCard'
import { inter } from '@/app/fonts'

const FeatueredProducts = () => {
  return (
    <section className={`${inter.className} xl:px-5 pt-16`}>
    <h2 className='heading text-center px-2 xl:text-left xl:px-20'>Featured Products</h2>
    <div className='container flex flex-wrap xl:flex-nowrap justify-center items-center gap-5'>
        <ProductCard image='/product1.png' newPrice={20} name='Library Stool Chair' isNew={true}  />
        <ProductCard image='/product7.png' newPrice={20} name='Library Stool Chair' isDiscount={true}/>
        <ProductCard image='/product6.png' newPrice={20} name='Library Stool Chair' />
        <ProductCard image='/product5.png' newPrice={20} name='Library Stool Chair' />

    </div>
    </section>
  )
}

export default FeatueredProducts