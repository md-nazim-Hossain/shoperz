"use client";

import AboutProduct from "@/components/Product/AboutProduct";
import ProductBundles from "@/components/Product/ProductBundles";
import ProductDetails from "@/components/Product/ProductDetails";
import { products } from "@/data/productData";
import { Product } from "@/types";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  const product: Product | undefined = products.find(
    product => product.id === id
  );
  if (!product) return <div>No product found</div>;
  return (
    <div className="space-y-10">
      <ProductDetails product={product} />
      <ProductBundles />
      <AboutProduct product={product} />
    </div>
  );
}

export default Page;
