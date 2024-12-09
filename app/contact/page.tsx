import React from 'react'
import { inter, poppins } from '../fonts'

const Contact = () => {
  return (
    <div className={`${inter.className} container py-28`}>
      <h2 className={`${poppins.className} heading text-center font-semibold text-4xl`}>Get In Touch With Us</h2>
      <p className={`${poppins.className} px-40 text-center text-[#9F9F9F]`}>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>
  )
}

export default Contact