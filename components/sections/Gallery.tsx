import { roboto } from '@/app/fonts'
import React from 'react'

const Gallery = () => {
  return (
    <section className='hidden lg:flex flex-wrap lg:flex-nowrap m-auto px-36 mt-20 w-full'>
              <div
        className={`${roboto.className} hidden lg:block text-lg  xl:text-[26px] text-center text-black rotate-180`}
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        EXPLORE NEW AND POPULAR STYLES
      </div>
                <div
          className="group m-0 relative w-full xl:w-[59%] h-auto mr-5 bg-slate-200 bg-[url('/product1.png')] bg-cover bg-center overflow-hidden"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "right bottom",
          }}
        >
        </div>

        <div className='flex gap-5 flex-wrap w-full items-center xl:w-3/5 jutify-center xl:justify-end'>
        <div
          className="group relative justify-center items-center w-48 h-48 xl:w-56 xl:h-56 bg-slate-200 bg-[url('/product1.png')] bg-cover bg-center overflow-hidden"
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
          className="group relative w-48 h-48 xl:w-56 xl:h-56 bg-slate-200 bg-[url('/product1.png')] bg-cover bg-center overflow-hidden"
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
          className="group relative w-48 h-48 xl:w-56 xl:h-56 bg-slate-200 bg-[url('/product1.png')] bg-cover bg-center overflow-hidden"
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
          className="group relative w-48 h-48 xl:w-56 xl:h-56 bg-slate-200 bg-[url('/product1.png')] bg-cover bg-center overflow-hidden"
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