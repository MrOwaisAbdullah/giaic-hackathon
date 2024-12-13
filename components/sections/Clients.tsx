import Image from 'next/image'
import React from 'react'
import client1 from '../../Public/client1.png'
import client2 from '../../Public/client2.png'
import client3 from '../../Public/client3.png'
import client4 from '../../Public/client4.png'
import client5 from '../../Public/client5.png'
import client6 from '../../Public/client6.png'
import client7 from '../../Public/client7.png'

const Clients = () => {
  return (
    <section className="text-gray-600 m-auto flex flex-col justify-center items-center">
  <div className=" pt-24">
    <div className="flex flex-wrap m-auto px-5 xl:px-0 justify-center  xl:flex-nowrap text-center gap-20 items-center">
      <div className="max-w-20 xl:max-w-36">
        <Image src={client1} alt='Clients'/>
      </div>
      <div className="max-w-20 xl:max-w-36">
        <Image src={client2} alt='Clients'/>
      </div>
      <div className="max-w-20 xl:max-w-36 xl:w-28 xl:min-w-28">
        <Image src={client3} alt='Clients'/>
      </div>
      <div className="max-w-20 xl:max-w-24 xl:w-24 xl:min-w-24">
        <Image src={client4} alt='Clients'/>
      </div>
      <div className="max-w-20 xl:max-w-40 xl:w-28 xl:min-w-28 hidden lg:block">
        <Image src={client5} alt='Clients'/>
      </div>
      <div className="max-w-20 xl:max-w-36 hidden lg:block">
        <Image src={client6} alt='Clients'/>
      </div>
      <div className="max-w-20 xl:max-w-28 xl:w-28 xl:min-w-28 hidden lg:block">
        <Image src={client7} alt='Clients'/>
      </div>
      


    </div>
  </div>
</section>

  )
}

export default Clients