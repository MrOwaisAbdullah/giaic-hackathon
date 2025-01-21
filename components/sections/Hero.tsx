import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../../Public/hero.png";
import { inter } from "@/app/fonts";

const Hero = () => {
  return (
    <section className={`${inter.className} lg:px-12 xl:px-0`}>
      <div className="flex bg-secondary p-4 lg:p-14 py-28 justify-center md:flex-row flex-col items-center lg:rounded-bl-[50px]">
        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-sm text-center lg:text-left mb-4 uppercase text-gray-900">
            Welcome to Furniture Mart
          </h1>
          <p className="mb-8 text-4xl xl:text-6xl font-bold">
            Best <span className="text-primary">Furniture Collection</span> for
            your interior.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-accent items-center gap-4 rounded">
              Shop Now <FaArrowRightLong className="text-sm" />
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 md:w-1/2 w-5/6">
          <Image className="" src={hero} priority alt="Hero Image" height={600} width={900} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
