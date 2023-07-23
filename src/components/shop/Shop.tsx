"use client";
import React from "react";
import { products } from "@/data/productData";
import ShopContainer from "./ShopContainer";

function Shop() {
  return <ShopContainer products={products} />;
}

export default Shop;
