import React from 'react'
import ProductCard from '../ui/ProductCard'
import { inter } from '@/app/fonts'
import product1 from "../../Public/product1.png";
import product2 from "../../Public/product2.png";
import product3 from "../../Public/product3.png";
import product4 from "../../Public/product4.png";
import product5 from "../../Public/product5.png";
import product6 from "../../Public/product6.png";
import product7 from "../../Public/product7.png";


const Products = () => {
  return (
    <section className={`${inter.className} xl:px-5 pt-28`}>
    <h2 className='heading text-center px-2 xl:px-28'>Our Products</h2>
    <div className='flex flex-wrap justify-center items-center gap-5'>
        <ProductCard image={product1} newPrice={20} name='Library Stool Chair' isNew={true}  />
        <ProductCard image={product7} newPrice={20} name='Library Stool Chair' isDiscount={true}/>
        <ProductCard image={product6} newPrice={20} name='Library Stool Chair' />
        <ProductCard image={product5} newPrice={20} name='Library Stool Chair' />
        <ProductCard image={product4} newPrice={20} name='Library Stool Chair' isNew={true}  />
        <ProductCard image={product3} newPrice={20} name='Library Stool Chair' isDiscount={true}/>
        <ProductCard image={product2} newPrice={20} name='Library Stool Chair' />
        <ProductCard image={product1} newPrice={20} name='Library Stool Chair' />
    </div>
    <div className='container flex flex-wrap xl:flex-nowrap justify-center items-center mt-10 gap-5'>

    </div>
    </section>
)
}

export default Products