"use client";
import Shop from "@/components/shop/Shop";
import ShopContainer from "@/components/shop/ShopContainer";
import { groupProduct } from "@/utils/grouping-products";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
    const { category } = groupProduct("category");
    const { brand } = useParams();
    const products = category.get(brand);

    return <ShopContainer products={products} />;
}

export default Page;
