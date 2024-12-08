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
    <section className="text-gray-600">
  <div className="xl:container pt-24">
    <div className="flex flex-wrap ml-6 xl:ml-0 xl:flex-nowrap xl:-mx-4 text-center gap-20 items-center">
      <div className="max-w-20">
        <Image src={client1} alt='Clients'/>
      </div>
      <div className="max-w-20">
        <Image src={client2} alt='Clients'/>
      </div>
      <div className="max-w-20">
        <Image src={client3} alt='Clients'/>
      </div>
      <div className="max-w-20">
        <Image src={client4} alt='Clients'/>
      </div>
      <div className="max-w-20 hidden lg:block">
        <Image src={client5} alt='Clients'/>
      </div>
      <div className="max-w-20 hidden lg:block">
        <Image src={client6} alt='Clients'/>
      </div>
      <div className="max-w-20 hidden lg:block">
        <Image src={client7} alt='Clients'/>
      </div>
      


    </div>
  </div>
</section>

  )
}

export default Clients