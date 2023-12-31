"use client";
import { products } from "@/data/productData";
import { groupProduct } from "@/utils/grouping-products";
import Link from "next/link";
import { useParams } from "next/navigation";
import FilterByBrands from "../productsFilter/FilterByBrands";
import FilterByPrice from "../productsFilter/FilterByPrice";
import FilterByRamProcessor from "../productsFilter/FilterByRamProcessor";
import FilterByRating from "../productsFilter/FilterByRating";
import Banner from "./Banner";
import { CollapsibleContainer } from "./CollapsibleContainer";
import Color from "./Color";

function SideBar() {
  const { category, brands, rating, price, processor, ram, colors } =
    groupProduct("");
  const { brand } = useParams();

  return (
    <div className="space-y-5">
      <div className="p-5 space-y-5 bg-light-gray rounded-md">
        <p className="font-medium">Categories</p>
        <CollapsibleContainer
          trigger={
            <Link href={"/shop"} className="w-full">
              <h4 className="w-full  text-sm font-semibold flex justify-between items-center">
                <span>All</span>
                <span className="text-secondary/60">({products?.length})</span>
              </h4>
            </Link>
          }
        >
          <div className="space-y-5">
            {Array.from(category)?.map(([key, value], index: number) => {
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
      <FilterByBrands product={brands} />
      <FilterByPrice product={price} />
      {brand === "smartphones" && (
        <>
          <FilterByRamProcessor product={ram} filterType="RAM Memory" />
          <FilterByRamProcessor product={processor} filterType="Processor" />
        </>
      )}
      <div className="p-5 rounded-md border space-y-5">
        <p className="font-medium">Colors</p>
        <Color colors={colors} />
      </div>
      <FilterByRating product={rating} />
      <Banner
        banner={{
          image: "/assets/images/banner/4.svg",
          color: ["#F2FFF7", "#C3F4FF"],
          title: "PORTABLE SPEAKERS COLLECTION 2023",
        }}
        isCol={true}
      />
    </div>
  );
}

export default SideBar;
