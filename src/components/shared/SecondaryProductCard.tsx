import Image from "next/image";
import React from "react";
import IconButton from "./Buttons/IconButton";
import Rating from "react-rating";

function SecondaryProductCard() {
  return (
    <div className="border p-4 flex justify-center gap-6 items-center rounded-md">
      <div className="w-[110px] aspect-square relative">
        <Image fill alt="Images" src="/assets/images/product/1.png" />
      </div>
      <div className="space-y-5 flex-1">
        <h5 className="text-primary font-medium">
          Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1&quot;
        </h5>
        <div></div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold">$1,999</h4>
          <IconButton />
        </div>
      </div>
    </div>
  );
}

export default SecondaryProductCard;
