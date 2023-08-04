import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Product } from "@/types";
import { formatPriceFilterKey } from "@/utils/format-data";
type Props = {
    product: Map<string, Product[]>;
};
function FilterByPrice({ product }: Props) {
    const sortProduct = Array.from(product).sort(
        ([keyA], [keyB]) => +keyA - +keyB
    );

    return (
        <div className="p-5 space-y-5 border rounded-md">
            <p className="font-medium">Price</p>
            <div className="space-y-5">
                {sortProduct.map(([key, value], index: number) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center space-x-2"
                        >
                            <Checkbox onChange={e => console.log(e)} id={key} />
                            <label
                                htmlFor={key}
                                className="flex capitalize items-center gap-x-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <h5>{formatPriceFilterKey(key)}</h5>
                                <h5 className="text-secondary/60">
                                    ({value?.length})
                                </h5>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FilterByPrice;
