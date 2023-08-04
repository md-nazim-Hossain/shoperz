"use client";

import { Product } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import { SelectComponents } from "../shared/SelectComponents";
import { SelectGroup, SelectItem } from "../ui/select";

type Props = {
    showing: number;
    totalSkip: number;
    setActivePage: Dispatch<SetStateAction<number>>;
    activePage: number;
    totalProduct: Product[];
    setShowingProducts: Dispatch<SetStateAction<number>>;
    showingProducts: number;
    isShowSelect?: boolean;
};
function Pagination({
    showing,
    activePage,
    setActivePage,
    totalProduct,
    totalSkip,
    setShowingProducts,
    showingProducts,
    isShowSelect = false,
}: Props) {
    const size = Math.ceil(totalProduct?.length / showingProducts);
    const totalLen = totalProduct?.length;

    return (
        <div className="px-5 py-3 border rounded-md flex items-center justify-between">
            <div className="flex flex-1 items-center gap-5">
                <h5>
                    Showing{" "}
                    <span className="font-bold text-tertiary">
                        {totalSkip}-{totalLen > showing ? showing : totalLen}
                    </span>{" "}
                    of{" "}
                    <span className="font-bold text-tertiary">{totalLen}</span>
                </h5>
                {isShowSelect && (
                    <SelectComponents
                        onChange={value => setShowingProducts(+value)}
                        placeholder="5"
                        className="w-[60px] h-[30px] rounded outline-none p-2 focus:ring-0 focus:ring-offset-0"
                    >
                        <SelectGroup>
                            {[5, 10, 20].map((item: number) => {
                                return (
                                    <SelectItem
                                        disabled={totalLen < item}
                                        key={item}
                                        value={item + ""}
                                    >
                                        {item}
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectComponents>
                )}
            </div>
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
