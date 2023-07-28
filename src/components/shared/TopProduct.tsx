import React, { ReactNode } from "react";
import TitleWrapper from "./TitleWrapper";
import { Product } from "@/types";
import SecondaryProductCard from "./SecondaryProductCard";
import SecondaryCardSkeleton from "./skeleton/SecondaryCardSkeleton";

type Props = {
  title: string | ReactNode;
  products: Product[];
};
function TopProduct({ title, products }: Props) {
  return (
    <div className="space-y-5">
      <TitleWrapper title={title} />
      {products && products.length ? (
        <>
          <div className="space-y-5">
            {products.map((product: Product, index: number) => (
              <SecondaryProductCard key={index} product={product} />
            ))}
          </div>
        </>
      ) : (
        <>
          {[1, 2, 3].map((index) => (
            <SecondaryCardSkeleton key={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default TopProduct;
