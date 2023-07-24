"use client";
import Shop from "@/components/shop/Shop";
import ShopContainer from "@/components/shop/ShopContainer";
import { groupProduct } from "@/utils/category-products";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const { slug } = groupProduct("category");
  const { brand } = useParams();
  const products = slug.get(brand);

  return <ShopContainer products={products} />;
}

export default Page;
