"use client";

import { Input } from "@/components/ui/input";

import { products } from "@/data/productData";
import { useSearchElement } from "@/hooks/useSearch";
import { useAppSelector } from "@/services/redux/Store";
import { FilterProps } from "@/types";
import { numberFormat } from "@/utils/format-data";
import { groupProduct } from "@/utils/grouping-products";
import Image from "next/image";
import Link from "next/link";
import { KeyboardEvent, LegacyRef, useEffect, useRef, useState } from "react";
import { BiSolidHeart } from "react-icons/bi";
import { CiShuffle } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import IconButton from "../Buttons/IconButton";
import { SearchProductModal } from "../SearchProductsModal";
import { SheetContainer } from "../SheetContainer";

function NavSearchBar() {
  const [select, setSelect] = useState<FilterProps>("");
  const { category } = groupProduct("category", products);
  const ref: LegacyRef<HTMLButtonElement> = useRef(null);
  const [selectProduct, setSelectProduct] = useState(products);
  const { wishListProduct, compareListProduct } = useAppSelector(
    state => state.toggleAddProductList
  );

  useEffect(() => {
    if (select !== "") {
      setSelectProduct(category.get(select));
    } else {
      setSelectProduct(products);
    }
  }, [select]);

  const { data, setSearch } = useSearchElement(selectProduct);

  return (
    <div className="container">
      <div className="py-6 flex items-center justify-between">
        <Link
          href={"/"}
          className="w-[100px] sm:w-[148px] h-[40px] relative md:mx-0"
        >
          <Image fill src={"/assets/logo/shoperz-black.svg"} alt="logo" />
        </Link>

        <div className="hidden rounded-full border border-primary/70 md:flex items-center overflow-hidden">
          <Input
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                ref.current?.click();
              }
            }}
            onBlur={e => setSearch(e.target.value)}
            type="text"
            className="h-full w-40 py-2 text-tertiary outline-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            placeholder="Search"
          />
          <select
            onChange={e => setSelect(e.target.value as FilterProps)}
            className="text-tertiary/50 mx-2 my-1.5 border-0 px-2 outline-none border-l capitalize space-y-3"
          >
            <option value={""}>All Categories</option>
            {Array.from(category).map(([key, _item], index: number) => {
              return (
                <option value={key} key={index} className="capitalize">
                  {key}
                </option>
              );
            })}
          </select>

          <SearchProductModal
            trigger={
              <button
                ref={ref}
                className="bg-primary/70 text-white px-4 py-2 border-none"
              >
                <GoSearch size={20} />
              </button>
            }
            products={data}
          />
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-secondary lg:pr-10">
          <HiUser size={20} className="hover:text-tertiary cursor-pointer" />

          <SheetContainer
            title="Compare List Products"
            type="comparelist"
            products={compareListProduct}
            trigger={
              <button className="relative hover:text-tertiary group">
                <h6 className="absolute z-20 -top-2.5 -right-2 group-hover:text-tertiary">
                  {numberFormat(compareListProduct.length.toString())}
                </h6>
                <CiShuffle size={20} />
              </button>
            }
          />
          <SheetContainer
            title="Wish List Products"
            type="wishlist"
            products={wishListProduct}
            trigger={
              <button className="relative group hover:text-tertiary">
                <h6 className="absolute z-20 -top-2.5 -right-2 group-hover:text-tertiary">
                  {numberFormat(wishListProduct.length.toString())}
                </h6>
                <BiSolidHeart size={20} />
              </button>
            }
          />

          <div className="flex items-center gap-1 hover:text-tertiary cursor-pointer group">
            <HiShoppingBag size={20} />
            <h5 className="group-hover:text-tertiary">$0.00</h5>
          </div>

          <IconButton Icon={GoSearch} className="flex md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default NavSearchBar;
