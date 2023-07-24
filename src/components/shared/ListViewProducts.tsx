"use client";
import { Product } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import { CiShuffle } from "react-icons/ci";
import { BiSolidHeart, BiHeart } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi";
import { discountPrice } from "@/utils/discount";
import Rating from "./Rating";

type Props = {
  product: Product;
};
function ListViewProducts({ product }: Props) {
  const [active, setActive] = useState(false);
  return (
    <div className="group cursor-pointer p-5 border border-light-gray rounded-md lg:flex gap-5 space-y-5 lg:space-y-0">
      <div className="md:flex flex-1 items-center gap-5">
        <div className="w-full md:w-auto sm:aspect-square h-[240px] flex justify-center items-center">
          <div className="w-[200px] aspect-square relative">
            <Image
              fill
              alt="Products Images"
              src={product?.image[0]}
              className="group-hover:invisible group-hover:opacity-0 group-hover:scale-x-0 duration-500 ease-in-out"
            />
            <Image
              fill
              alt="Products Images"
              src={product?.image[1]}
              className="opacity-0 invisible scale-x-0 group-hover:visible group-hover:opacity-100 group-hover:scale-x-100 duration-500 ease-in-out"
            />
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <h6>
            {product?.category}, {product?.subCategory}
          </h6>
          <div className="min-h-[40px]">
            <h5 className="text-primary font-medium">{product?.model}</h5>
          </div>
          <Rating value={product?.rating} />

          <ul className="list-disc space-y-2">
            {product?.description.map((item: string, index: number) => (
              <li key={index} className="text-sm text-secondary/70">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-[30%] md:w-1/2 lg:flex justify-center items-start ml-auto">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <PrimaryButton
              title="Compare"
              className="bg-white border text-secondary/70 font-normal"
              Icon={CiShuffle}
            />
            <PrimaryButton
              title="Whitelist"
              className="bg-white border text-secondary/70 font-normal"
              Icon={active ? BiSolidHeart : BiHeart}
            />
          </div>

          <div>
            {product?.discount > 0 ? (
              <div>
                <h4 className="font-bold text-danger">
                  {discountPrice(product?.price, product?.discount)}
                </h4>
                <h6 className="line-through text-tertiary">
                  ${(product?.price).toFixed(2)}
                </h6>
              </div>
            ) : (
              <h4 className="font-bold">${(product?.price).toFixed(2)}</h4>
            )}
          </div>

          <PrimaryButton
            title="Add to Cart"
            className="w-full"
            Icon={HiShoppingBag}
          />
        </div>
      </div>
    </div>
  );
}

export default ListViewProducts;
