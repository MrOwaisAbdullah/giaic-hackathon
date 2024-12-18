import { inter, poppins } from "@/app/fonts";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { SlTrophy } from "react-icons/sl";

const Contact = () => {
  return (
    <div className={`${poppins.className} pt-28 -mb-28 max-w-7xl m-auto`}>
      <h2 className={`heading xl:px-0 px-8 text-center font-semibold text-4xl`}>
        Get In Touch With Us
      </h2>
      <p className={`xl:px-40 px-8 text-center text-[#9F9F9F]`}>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="flex flex-wrap xl:flex-nowrap mt-28 px-8 xl:px-28 justify-center xl:justify-start">
        <div className={`${inter.className} pb-20 flex flex-col gap-20`}>
          <div className="flex gap-5">
            <IoLocation className="text-4xl" />
            <div>
              <h4 className="text-xl font-medium">Address</h4>
              <p className="lg:w-48">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <FaPhoneAlt className="text-4xl" />
            <div>
              <h4 className="text-xl font-medium">Phone</h4>
              <p className="lg:w-48">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <IoIosTime className="text-4xl" />
            <div>
              <h4 className="text-xl font-medium">Working Time</h4>
              <p className="lg:w-48">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Conatct Form */}

        <div className="xl:w-1/2 max-w-xl justify-center bg-white flex flex-col xl:ml-auto w-full -mt-10 md:py-8">
          <div className="relative mb-5">
            <label htmlFor="name" className="leading-7 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Abc"
              className="w-full h-14 placeholder:text-sm placeholder:px-2 bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-5">
            <label htmlFor="email" className="leading-7 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Abc@def.com"
              className="w-full h-14 placeholder:text-sm placeholder:px-2 bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-5">
            <label htmlFor="name" className="leading-7 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="This is an optional"
              className="w-full h-14 placeholder:text-sm placeholder:px-2 bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-5">
            <label htmlFor="message" className="leading-7 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi! i’d like to ask about"
              className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-primary border-0 w-2/5 py-2 px-6 focus:outline-none hover:bg-accent rounded text-lg">
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center xl:justify-around xl:flex-nowrap w-full bg-secondary py-28 mt-10 gap-10">
        <div className="flex gap-5 justify-center items-center ">
          <SlTrophy className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold mb-1">High Quaility</h4>
            <p className="text-lg font-medium text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center ">
          <BsPatchCheck className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold mb-1">Warranty Protection</h4>
            <p className="text-lg font-medium text-[#898989]">Over 2 years</p>
          </div>
        </div>

        <div className="flex gap-5 items-center ">
          <BiSupport className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold mb-1">24 / 7 Support</h4>
            <p className="text-lg font-medium text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
