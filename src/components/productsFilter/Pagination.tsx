"use client";

import { Product } from "@/types/types";
import React, { Dispatch, SetStateAction } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import PrimaryButton from "../shared/Buttons/PrimaryButton";

type Props = {
  showing: number;
  totalSkip: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  activePage: number;
  totalProduct: Product[];
};
function Pagination({
  showing,
  activePage,
  setActivePage,
  totalProduct,
  totalSkip,
}: Props) {
  const size = Math.ceil(totalProduct?.length / 10);

  return (
    <div className="px-5 py-3 border rounded-md flex items-center justify-between">
      <h5>
        Showing{" "}
        <span className="font-bold text-tertiary">
          {totalSkip}-{showing}
        </span>{" "}
        of{" "}
        <span className="font-bold text-tertiary">{totalProduct?.length}</span>
      </h5>
      <div className="flex items-center gap-3">
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
          className="text-secondary/70 px-2 py-1"
        >
          <LiaAngleLeftSolid size={16} />
        </button>
        <div className="flex gap-3 items-center">
          {[...Array(size).keys()].map((item, index) => {
            return (
              <PrimaryButton
                method={() => {
                  setActivePage(item + 1);
                }}
                className={`w-9 aspect-square rounded-full p-0 ${
                  index === activePage - 1
                    ? "bg-primary"
                    : "bg-gray-200 text-tertiary/70"
                }`}
                key={index}
                title={item + 1 + ""}
              />
            );
          })}
        </div>
        <button
          disabled={activePage === size}
          onClick={() => setActivePage(activePage + 1)}
          className="text-secondary/70 px-2 py-1"
        >
          <LiaAngleRightSolid size={16} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
