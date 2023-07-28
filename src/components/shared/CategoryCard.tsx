import React from "react";
import IconButton from "./Buttons/IconButton";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { Product } from "@/types";

type Props = {
  product: Product;
};

function CategoryCard({ product }: Props) {
  return (
    <div className="border p-4 space-y-4 bg-white rounded-md">
      <p className="font-medium text-center">{product?.category}</p>
      <div className="w-[200px] relative aspect-square mx-auto group overflow-hidden cursor-pointer">
        <Image
          fill
          className="z-10 group-hover:opacity-0 group-hover:-translate-x-full group-hover:left-full duration-500 ease-in-out"
          alt="Products Images"
          src={product?.image[0]}
        />
        <Image
          fill
          className="opacity-0 left-full translate-x-full group-hover:translate-x-0 group-hover:left-0 group-hover:z-10 group-hover:opacity-100 duration-500 ease-in-out"
          alt="Products Images"
          src={product?.image[1]}
        />
      </div>
      <div className="flex justify-end items-center">
        <IconButton Icon={BsArrowRight} />
      </div>
    </div>
  );
}

export default CategoryCard;
