import React from "react";
import { inter } from "../../app/fonts";
import { PiShoppingCart } from "react-icons/pi";
import { StaticImageData } from "next/image";

interface ProductCards {
  name: string;
  oldPrice?: number;
  newPrice: number;
  isDiscount?: boolean;
  image: StaticImageData;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCards> = ({
  name,
  oldPrice,
  newPrice,
  isDiscount,
  image,
  isNew,
}) => {
  return (
    <div className={`${inter.className} group min-w-64 items-center`}>
      <div
        className="cursor-pointer z-0 relative group min-h-56 max-h-96 md:max-w-64 md:max-h-56 bg-graybg p-3 rounded overflow-hidden bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "100% 120%",
        }}
      >
        <div
          className={`${
            isDiscount || isNew ? "flex justify-between" : "flex justify-end"
          }`}
        >
          <div
            className={`${
              isDiscount
                ? "bg-highlight max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            Sales
          </div>
          <div
            className={`${
              isNew
                ? "bg-highlight2 max-w-20 z-10 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            NEW
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-3 ">
        <div className="flex flex-col mt-0 pt-0 justify-left text-left">
          <h2 className="group-hover:text-primary my-1">{name}</h2>
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
