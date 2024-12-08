import { roboto } from '@/app/fonts'
import React from 'react'
import product1 from "../../Public/product1.png";
import product3 from "../../Public/product3.png";
import product5 from "../../Public/product5.png";
import product6 from "../../Public/product6.png";
import product7 from "../../Public/product7.png";


const Gallery = () => {
  return (
    <section className='flex flex-wrap lg:flex-nowrap m-auto px-5 xl:px-36 mt-36 w-full'>
              <div
        className={`${roboto.className} hidden lg:block text-lg  xl:text-2xl text-center text-black rotate-180`}
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        EXPLORE NEW AND POPULAR STYLES
      </div>
                <div
          className={`group relative w-36 h-36 xl:w-56 xl:h-56 bg-slate-200 bg-[url(${product6})] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}
        >
        </div>

        <div className='flex gap-4 flex-wrap xl:w-3/5 justify-center xl:justify-end'>
        <div
          className={`group relative w-36 h-36 xl:w-56 xl:h-56 bg-slate-200 bg-[url(${product5})] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className={`group relative w-36 h-36 xl:w-56 xl:h-56 bg-slate-200 bg-[url(${product1})] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className={`group relative w-36 h-36 xl:w-56 xl:h-56 bg-slate-200 bg-[url(${product3})] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute w-full -bottom-96 group-hover:bottom-0 left-0 text-white flex flex-col text-left p-2 px-4 items-center justify-between bg-black/80">
            <h3 className="text-xl">Wing Chair</h3>
            <p className="text-sm text-secondary">3,584 Products</p>
          </div>
        </div>

        <div
          className={`group relative w-36 h-36 xl:w-56 xl:h-56 bg-slate-200 bg-[url(${product7})] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}
        >
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