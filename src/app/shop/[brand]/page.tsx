"use client";
import Shop from "@/components/shop/Shop";
import ShopContainer from "@/components/shop/ShopContainer";
import { groupProductBySlug } from "@/utils/category-products";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const map = groupProductBySlug();
  const { brand } = useParams();
  const products = map.get(brand);

  return <ShopContainer products={products} />;
}

export default Page;
