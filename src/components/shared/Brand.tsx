import { brandsData } from "@/data/brandsData";
import { Brand } from "@/types";
import Image from "next/image";
import React from "react";

function Brand() {
  return (
    <div className="container">
      <div className="rounded-md border py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-5">
        {brandsData.map((brand: Brand, index: number) => {
          return (
            <div key={index} className=" group w-full h-[80px] relative">
              <Image className="transition-all duration-300 ease-in-out z-10 opacity-100 group-hover:z-0 group-hover:opacity-0" alt={brand?.image?.alt} src={brand?.image?.src[0]} fill />
              <Image className="transition-all duration-300 ease-in-out opacity-0 z-0 group-hover:opacity-100 group-hover:z-10" alt={brand?.image?.alt} src={brand?.image?.src[1]} fill />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brand;
