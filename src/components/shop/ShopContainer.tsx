"use client";
import React, { useState } from "react";
import PrimaryProductCard from "../shared/PrimaryProductCard";
import { Product } from "@/types";
import { useAppSelector } from "@/redux/Store";
import ListViewProducts from "../shared/ListViewProducts";
import ShopSearchBar from "./ShopSearchBar";
import Pagination from "../productsFilter/Pagination";
import { usePagination } from "@/hooks/usePagination";

type Props = {
  products: Product[];
};
function ShopContainer({ products }: Props) {
  const [activePage, setActivePage] = useState(1);
  const { view } = useAppSelector((state) => state.view);
  const { data, showing, totalSkip } = usePagination(products, activePage, 10);
  return (
    <div className=" space-y-5">
      <ShopSearchBar
        filterProduct={products}
        showing={showing}
        totalSkip={totalSkip}
      />
      <div>
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.map((product: Product, index: number) => (
              <PrimaryProductCard product={product} key={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {data.map((product: Product, index: number) => (
              <ListViewProducts product={product} key={index} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        showing={showing}
        totalSkip={totalSkip}
        totalProduct={products}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default ShopContainer;
