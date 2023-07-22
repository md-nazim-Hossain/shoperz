import Image from "next/image";
import React from "react";
import IconButton from "./Buttons/IconButton";
import { Product } from "@/types/types";
import { discountPrice } from "@/utils/discount";

type Props = {
  product: Product;
};
function PrimaryProductCard({ product }: Props) {
  return (
    <div className="border p-4 space-y-5 rounded-md">
      <h6>{product?.category}</h6>
      <div className="min-h-[40px]">
        <h5 className="text-primary font-medium">{product?.model}</h5>
      </div>

      <div className="relative w-[200px] aspect-square mx-auto group cursor-pointer">
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <Image
            fill
            alt="Products Images"
            className="group-hover:invisible group-hover:opacity-0 group-hover:scale-x-0 duration-500 ease-in-out"
            src={product?.image[0]}
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            fill
            alt="Products Images"
            className="opacity-0 invisible scale-x-0 group-hover:visible group-hover:opacity-100 group-hover:scale-x-100 duration-500 ease-in-out"
            src={product?.image[1]}
          />
        </div>
      </div>
      <div className="flex justify-between items-center h-12">
        {product?.discount > 0 ? (
          <>
            <div>
              <h4 className="font-bold text-danger">
                {discountPrice(product?.price, product?.discount)}
              </h4>
              <h6 className="line-through text-tertiary">
                ${(product?.price).toFixed(2)}
              </h6>
            </div>
            <IconButton />
          </>
        ) : (
          <>
            <h4 className="font-bold">${(product?.price).toFixed(2)}</h4>
            <IconButton />
          </>
        )}
      </div>
    </div>
  );
}

export default PrimaryProductCard;
