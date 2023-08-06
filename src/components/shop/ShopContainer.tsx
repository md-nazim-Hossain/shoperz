"use client";
import { usePagination } from "@/hooks/usePagination";
import { useAppSelector } from "@/services/redux/Store";
import { Product } from "@/types";
import { useState } from "react";
import Pagination from "../productsFilter/Pagination";
import ListViewProducts from "../shared/ListViewProducts";
import PrimaryProductCard from "../shared/PrimaryProductCard";
import ShopSearchBar from "./ShopSearchBar";

type Props = {
  products: Product[];
};
function ShopContainer({ products }: Props) {
  const [activePage, setActivePage] = useState(1);
  const [showingProducts, setShowingProducts] = useState(10);
  const { view } = useAppSelector(state => state.view);
  const { data, showing, totalSkip } = usePagination(
    products,
    activePage,
    showingProducts
  );
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
            {data?.map((product: Product, index: number) => (
              <PrimaryProductCard product={product} key={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {data?.map((product: Product, index: number) => (
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
        setShowingProducts={setShowingProducts}
        showingProducts={showingProducts}
      />
    </div>
  );
}

export default ShopContainer;
