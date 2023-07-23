import Image from "next/image";
import React from "react";
import IconButton from "./Buttons/IconButton";
import Rating from "react-rating";
import { Product } from "@/types/types";
import { discountPrice } from "@/utils/discount";

type Props = {
  product: Product;
};
function SecondaryProductCard({ product }: Props) {
  return (
    <div className="bg-white cursor-pointer group border p-4 flex justify-center gap-6 items-center rounded-md">
      <div className="w-[110px] aspect-square relative">
        <Image
          fill
          alt="Products Images"
          src={product?.image[0]}
          className="z-10 group-hover:opacity-0 duration-500 ease-in-out"
        />
        <Image
          fill
          alt="Products Images"
          src={product?.image[1]}
          className="opacity-0  group-hover:z-10 group-hover:opacity-100 duration-500 ease-in-out"
        />
      </div>
      <div className="space-y-5 flex-1">
        <h5 className="text-primary font-medium">{product?.model}</h5>
        <div></div>
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
    </div>
  );
}

export default SecondaryProductCard;
