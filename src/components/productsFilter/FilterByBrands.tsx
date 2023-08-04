"use client";
import { Product } from "@/types";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

type Props = {
    product: Map<string, Product[]>;
};
function FilterByBrands({ product }: Props) {
    const [more, setMore] = useState(true);
    const size = more ? 6 : product.size;
    return (
        <div className="p-5 space-y-5 border rounded-md">
            <p className="font-medium">Brands</p>
            <div className="space-y-5">
                {Array.from(product)
                    .slice(0, size)
                    .map(([key, value], index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center space-x-2"
                            >
                                <Checkbox
                                    onChange={e => console.log(e)}
                                    id={key}
                                />
                                <label
                                    htmlFor={key}
                                    className="flex capitalize items-center gap-x-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    <h5>{value[0]?.brand}</h5>
                                    <h5 className="text-secondary/60">
                                        ({value?.length})
                                    </h5>
                                </label>
                            </div>
                        );
                    })}
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={() => setMore(!more)}
                    className="text-sm text-secondary/70 flex items-center gap-3"
                >
                    <span>See {!more ? "Less" : "More"}</span>
                    {more ? <LiaAngleDownSolid /> : <LiaAngleUpSolid />}
                </button>
            </div>
        </div>
    );
}

export default FilterByBrands;
