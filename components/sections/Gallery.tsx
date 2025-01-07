import { roboto } from '@/app/fonts'
import React from 'react'
import product1 from "../../Public/product1.png"
import product3 from "../../Public/product3.png"
import product5 from "../../Public/product5.png"
import product6 from "../../Public/product6.png"
import product7 from "../../Public/product7.png"
import Image from 'next/image'

const Gallery = () => {
  return (
    <section className='relative grid grid-cols-1 gap-5 xl:gap-0 md:grid-cols-[auto,auto] px-5 xl:px-0 m-auto mt-52 w-full overflow-hidden'>
      {/* vertical Text */}
      <div
        className={`${roboto.className} md:hidden block text-2xl font-medium text-center text-black`}
      >
        EXPLORE NEW AND POPULAR STYLES
      </div>
      <div className='flex'>
              <div
        className={`${roboto.className} hidden md:block text-lg  xl:text-[28px] font-medium text-center text-black rotate-180`}
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        EXPLORE NEW AND POPULAR STYLES
      </div>
      {/* Large Image */}
                <div
          className="group m-0 relative xl:mx-5 w-full bg-slate-200 overflow-hidden">
            <Image className="object-cover" src={product6} alt='Product'></Image>
        </div>
        </div>
      {/* four small images */}
        <div className='grid grid-cols-1 sm:grid-cols-[auto,auto] gap-5 xl:gap-7 w-full'>
        <div
          className="group relative md:max-h-48 lg:max-h-60 xl:max-h-full bg-slate-200 overflow-hidden">
             <Image className="object-cover" src={product5} alt='Product'></Image>
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="group relative md:max-h-48 lg:max-h-60 xl:max-h-full bg-slate-200 overflow-hidden">
             <Image className="object-cover" src={product3} alt='Product'></Image>
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="group relative md:max-h-48 lg:max-h-60 xl:max-h-full bg-slate-200 overflow-hidden">
             <Image className="object-cover" src={product1} alt='Product'></Image>
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className="group relative md:max-h-48 lg:max-h-60 xl:max-h-full justify-center items-center bg-slate-200 overflow-hidden">
             <Image className="object-cover" src={product7} alt='Product'></Image>
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>


        </div>
    </section>
)
}

export default Gallery