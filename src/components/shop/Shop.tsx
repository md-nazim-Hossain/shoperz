"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { BsSlash } from "react-icons/bs";
import { products } from "@/data/productData";
import PrimaryProductCard from "../shared/PrimaryProductCard";
import { Product } from "@/types/types";

function Shop() {
  const pathname = usePathname();
  const splitPathname = pathname?.split("/").filter((x) => x);

  return (
    <div className="container">
      <div className="py-10 flex items-center gap-1">
        {splitPathname.map((path: string, index: number) => (
          <h5 className="capitalize space-x-1 flex items-center" key={index}>
            <span>{path}</span>
            {index !== splitPathname.length - 1 && <BsSlash size={24} />}
          </h5>
        ))}
      </div>

      <div className="flex items-start gap-x-5 space-y-5">
        <div className="w-[272px] sb"></div>
        <div className="flex-1">
          <div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products
              .filter((item) => item.discount === 0)
              .map((product: Product, index: number) => (
                <PrimaryProductCard product={product} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
