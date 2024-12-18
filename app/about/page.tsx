import Image from 'next/image'
import React from 'react'
import aboutImage from "../../Public/about.png"
import aboutImage2 from "../../Public/about2.png"
import aboutImage3 from "../../Public/about3.png"
import aboutImage4 from "../../Public/about4.png"
import { inter } from '../fonts'
import { TbTruckDelivery } from 'react-icons/tb'
import { PiPlantLight } from 'react-icons/pi'
import { HiOutlineCreditCard } from 'react-icons/hi'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const About = () => {
  return (
    <div className={`${inter.className} relative max-w-7xl m-auto`}>

      <div className='flex flex-wrap xl:flex-nowrap px-5 xl:px-0 xl:max-h-96 gap-5 my-20'>
        <div className='flex flex-col gap-5 bg-[#007580] p-4 lg:p-12 text-white w-full xl:w-1/2'>
          <h1 className='text-3xl font-bold'>About Us - Comforty</h1>
          <p className='text-sm'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
          <button className='bg-white/15 mt-20 py-3 px-5 sm:w-1/2'>View Collection</button>
          </div>
        <Image src={aboutImage} alt='About Comforty' className='xl:w-1/2 object-cover'/>
      </div>

      <div className='flex flex-col lg:px-6'>
        <h2 className='text-xl lg:text-3xl font-semibold text-center'>What Makes Our Brand Different</h2>
        {/* Content */}
        <div className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center content-center place-content-center gap-5 xl:px-0 px-5 py-10'>
          <div className='flex flex-col gap-2 bg-secondary rounded text-primary px-10 py-6 w-full'>
          <TbTruckDelivery className='text-2xl'/>
          <h3 className='text-lg'>Next day as standard</h3>
          <p className='text-sm'>Order before 3pm and get your order the next day as standard</p>
          </div>

          <div className='flex flex-col gap-2 bg-secondary rounded text-primary px-10 py-6 w-full'>
          <IoCheckmarkCircleOutline className='text-2xl'/>
          <h3 className='text-lg'>Made by true artisans</h3>
          <p className='text-sm'>Handmade crafted goods made with real passion and craftmanship</p>
          </div>

          <div className='flex flex-col gap-2 bg-secondary rounded text-primary px-10 py-6 w-full'>
          <HiOutlineCreditCard className='text-2xl'/>
          <h3 className='text-lg'>Unbeatable prices</h3>
          <p className='text-sm'>For our materials and quality you won’t find better prices anywhere</p>
          </div>

          <div className='flex flex-col gap-2 bg-secondary rounded text-primary px-10 py-6 w-full'>
          <PiPlantLight className='text-2xl'/>
          <h3 className='text-lg'>Recycled packaging</h3>
          <p className='text-sm'>We use 100% recycled to ensure our footprint is more manageable</p>
          </div>
        </div>
      </div>

      <div className='xl:px-0 mt-10 px-6'>
    <h2 className='text-3xl font-semibold text-center px-2 xl:text-left'>Our Popular Products</h2>
    <div className='flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-8'>
      <div className='xl:w-1/2 max-w-5xl flex flex-col gap-2 items-center xl:items-start'>
        <Image className='xl:max-h-96' src={aboutImage2} alt='About'/>
        <p className='text-xl'>The Poplar suede sofa</p>
        <p className='text-lg -mt-1'>$99.00</p>
      </div>

      <div className='lg:w-1/4 w-full flex flex-col gap-2 items-center xl:items-start'>
        <Image className='object-top' src={aboutImage4} alt='About'/>
        <p className='text-xl'>The Dandy chair</p>
        <p className='text-lg -mt-1'>$99.00</p>
      </div>

      <div className='lg:w-1/4 w-full flex flex-col gap-2 items-center xl:items-start'>
        <Image className='' src={aboutImage3} alt='About'/>
        <p className='text-xl'>The Dandy chair</p>
        <p className='text-lg -mt-1'>$99.00</p>
      </div>
    </div>
    </div>

    </div>
  )
}

export default About