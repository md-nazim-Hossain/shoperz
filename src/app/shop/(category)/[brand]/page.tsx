"use client";
import ShopContainer from "@/components/shop/ShopContainer";
import { groupProduct } from "@/utils/grouping-products";
import { useParams } from "next/navigation";

function Page() {
  const { category } = groupProduct("category");
  const { brand } = useParams();
  const products = category.get(brand);

  return <ShopContainer products={products} />;
}

export default Page;
