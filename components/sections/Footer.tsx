import Link from "next/link";
import React from "react";
import logo from "../../Public/Logo Icon.png";
import Image from "next/image";
import { inter } from "@/app/fonts";
import logos from '../../Public/Logos.png'
import { FaPinterest, FaYoutube, FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${inter.className} border-t mt-28`}>
      <div className="max-w-7xl m-auto xl:px-32 md:px-5 pt-20 pb-10 mx-auto">
        <div className="flex flex-wrap xl:flex-nowrap md:text-left md:items-start items-center text-center order-first">
          <div className="flex flex-col items-center md:items-start md:justify-start justify-center md:w-[30%] px-4 pb-6 gap-5">
            {/* Logo */}
            <Link
              href="/"
              className={`flex text-2xl justify-start gap-2 font-medium items-center`}
            >
              <Image src={logo} alt="Logo"></Image>
              Comforty
            </Link>
            <p className="mt-7 text-[#7d7b8e]">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
            {/* Social Icons */}
            <div className="flex lg:justify-start justify-center items-center mt-7 w-full gap-6 text-grey">
              <FaFacebook className="cursor-pointer flex justify-center items-center transition-all ease-in-out duration-200  hover:text-primary hover:border text-xl hover:text-2xl hover:p-1 border-primary rounded-full "/>
              <FaTwitter className="cursor-pointer flex justify-center items-center transition-all ease-in-out duration-200  hover:text-primary hover:border text-xl hover:text-2xl hover:p-1 border-primary rounded-full "/>
              <FaInstagram className="cursor-pointer flex justify-center items-center transition-all ease-in-out duration-200  hover:text-primary hover:border text-xl hover:text-2xl hover:p-1 border-primary rounded-full "/>
              <FaPinterest className="cursor-pointer flex justify-center items-center transition-all ease-in-out duration-200  hover:text-primary hover:border text-xl hover:text-2xl hover:p-1 border-primary rounded-full "/>
              <FaYoutube className="cursor-pointer flex justify-center items-center transition-all ease-in-out duration-200  hover:text-primary hover:border text-xl hover:text-2xl hover:p-1 border-primary rounded-full "/>
              
            </div>
          </div>

          <div className="md:w-[15%] w-full px-4">
            <h2 className="uppercase font-medium text-[#9A9CAA] text-sm mb-3">
              Category
            </h2>
            <nav className="list-none flex flex-col gap-2 mb-10">
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Sofa</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Armchair</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Wing Chair</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Desk Chair</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">wooden Chair</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Park Bench</Link>
              </li>
            </nav>
          </div>

          <div className="md:w-[15%] w-full px-4">
            <h2 className="uppercase font-medium text-[#9A9CAA] text-sm mb-3">
              Support
            </h2>
            <nav className="list-none flex flex-col gap-2 mb-10">
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Help & Support</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Terms & Conditions</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Privacy Policy</Link>
              </li>
              <li>
                <Link href={'#'} className=" hover:text-primary hover:underline underline-offset-2">Help</Link>
              </li>
            </nav>
          </div>

          <div className="md:w-2/5 w-full px-4">
          <h2 className="uppercase font-medium text-[#9A9CAA] text-sm mb-3">
              Newsletter
            </h2>

            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-center md:justify-start">
              <div className="relative items-center flex justify-center xl:w-3/4 xl:mr-2 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Your email"
                  className="w-full bg-opacity-50 flex justify-center items-center rounded-[8px] border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 justify-center items-center inline-flex text-[15px] w-4/5 md:w-[25%] text-white bg-primary border-0 py-2 px-2 focus:outline-none hover:bg-accent rounded-[8px]">
                Subscripe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl m-auto border-t px-4">
        <div className="justify-center lg:justify-left xl:px-32 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-center lg:text-left text-gray-500 sm:mt-0 mt-4">
          @ 2024 - Designed & Develop by 
            <a
              href="https://www.linkedin.com/in/mrowaisabdullah/"
              rel="noopener noreferrer"
              className="text-accent ml-1"
              target="_blank"
            >
              Owais Abdullah
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Image src={logos} alt="Payment Logos" className="grayscale hover:grayscale-0 transition duration-300"/>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
