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
            <div key={index} className="w-full h-[80px] relative">
              <Image alt={brand?.image?.alt} src={brand?.image?.src} fill />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brand;
