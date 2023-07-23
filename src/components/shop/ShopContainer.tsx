"use client";
import React from "react";
import PrimaryProductCard from "../shared/PrimaryProductCard";
import { Product } from "@/types/types";
import { useAppSelector } from "@/redux/Store";
import ListViewProducts from "../shared/ListViewProducts";

type Props = {
  products: Product[];
};
function ShopContainer({ products }: Props) {
  const { view } = useAppSelector((state) => state.view);
  return (
    <div>
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product: Product, index: number) => (
            <PrimaryProductCard product={product} key={index} />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {products.map((product: Product, index: number) => (
            <ListViewProducts product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopContainer;
