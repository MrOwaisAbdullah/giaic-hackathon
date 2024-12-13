import React from "react";
import { inter } from "../../app/fonts";
import { PiShoppingCart } from "react-icons/pi";
import Image, { StaticImageData } from "next/image";

interface ProductCards {
  name: string;
  oldPrice?: number;
  newPrice: number;
  isDiscount?: boolean;
  pImage: StaticImageData;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCards> = ({
  name,
  oldPrice,
  newPrice,
  isDiscount,
  pImage,
  isNew,
}) => {
  return (
    <div className={`${inter.className} relative flex flex-col cursor-pointer group min-w-72 items-center`}>
      <div
        className="cursor-pointer z-0 relative group min-h-56 max-h-96 md:max-w-64 md:max-h-56 bg-graybg rounded overflow-hidden"
      >
        
        <div
          className={`${
            isDiscount || isNew ? "flex justify-between" : "flex justify-end"
          }`}
        >
          {/* Dynamically add Product Image */}
          <Image src={pImage} alt={name} width={1000} height={1500}/>

          {/* dynamically add the New or Discount Tag if they provided */}
          <div
            className={`${
              isDiscount
                ? "bg-highlight absolute top-3 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            Sales
          </div>
          <div
            className={`${
              isNew
                ? "bg-highlight2 absolute top-3 left-3 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            NEW
          </div>
        </div>
      </div>
      
      {/* Dynamically adding Product Name, new Prices and old price, if the old price is not provided dont show it  */}
      <div className="relative flex items-center justify-between ">
        <div className="flex flex-col mr-24 xs:mr-64 md:mr-20 p-0 justify-left text-left">
          <h2 className="group-hover:text-primary mb-1">{name}</h2>
          <div className="flex gap-1 -mt-1 flex-col">
            <p className="text-lg font-medium">{`$${newPrice}`}</p>
            <p
              className={`${
                oldPrice ? "text-sm text-graytext pl-1 line-through" : "hidden"
              }`}
            >{`$${oldPrice}`}</p>
          </div>
        </div>
        <div className="flex bg-secondary p-2 justify-end rounded-[8px] hover:bg-primary cursor-pointer hover:text-white ">
          <PiShoppingCart className="text-xl flex" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
