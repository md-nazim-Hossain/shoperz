"use client";
import React from "react";
import { CollapsibleContainer } from "./CollapsibleContainer";
import { groupProductBySlug } from "@/utils/category-products";
import Link from "next/link";
import { products } from "@/data/productData";

function SideBar() {
  const data = groupProductBySlug();

  return (
    <div className="bg-light-gray rounded-md">
      <div className="p-5 space-y-5">
        <p className="font-medium">Categories</p>
        <CollapsibleContainer
          trigger={
            <h4 className="w-full text-sm font-semibold flex justify-between items-center">
              <span>All</span>
              <span className="text-secondary/60">({products?.length})</span>
            </h4>
          }
        >
          <div className="space-y-5">
            {Array.from(data)?.map(([key, value], index: number) => {
              return (
                <Link
                  href={`/shop/${key}`}
                  key={index}
                  className="flex gap-x-3 items-center"
                >
                  <h5>{value[0]?.category}</h5>
                  <h5 className="text-secondary/60">({value?.length})</h5>
                </Link>
              );
            })}
          </div>
        </CollapsibleContainer>
      </div>
    </div>
  );
}

export default SideBar;
