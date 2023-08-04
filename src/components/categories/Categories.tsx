import React from "react";
import CategoryCard from "../shared/CategoryCard";
import { products } from "@/data/productData";
import TitleWrapper from "../shared/TitleWrapper";

function Categories() {
    return (
        <div className="bg-secondary/10 pb-14 pt-3">
            <div className="container space-y-5">
                <TitleWrapper title="Categories" />
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products.slice(0, 10).map((product, index) => {
                        return <CategoryCard key={index} product={product} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Categories;
