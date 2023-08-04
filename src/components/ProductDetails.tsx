"use client";

import { products } from "@/data/productData";

import { Product } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FiMinus, FiSearch } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
import CompareAndWishListBtn from "./shared/Buttons/CompareAndWishListBtn";
import IconButton from "./shared/Buttons/IconButton";
import PrimaryButton from "./shared/Buttons/PrimaryButton";
import Color from "./shared/Color";
import Rating from "./shared/Rating";
import { Badge } from "./ui/badge";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product: Product | undefined = products.find(
    product => product.id === id
  );

  const [activeImage, setActiveImage] = useState(product?.image[0]);

  if (!product) return <div>No product found</div>;
  const inStock = product?.quantity - product?.sold;

  return (
    <div className="container pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="w-full space-y-3">
          <div className="relative w-full aspect-square">
            <Image
              src={activeImage ?? ""}
              className="object-contain object-center"
              alt={product?.model}
              fill
            />
            <IconButton
              Icon={FiSearch}
              className="absolute top-5 right-5 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-3">
            {product?.image.map((image: string, index: number) => (
              <button
                onClick={() => setActiveImage(image)}
                key={index}
                className="relative w-[80px] aspect-square"
              >
                <Image src={image} alt={product.model} fill />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h6>
            {product?.category} , {product?.subCategory}
          </h6>
          <h3 className="text-primary font-medium">{product?.model}</h3>
          <div className="flex items-center gap-3">
            <Rating value={product?.rating} />
            <h5 className="text-tertiary">{product?.rating}</h5>
            <h5 className="text-secondary/70">({product?.totalReview})</h5>
          </div>
          <ul className="space-y-2 ml-5">
            {product?.description.map((desc: string, index: number) => (
              <li
                key={index}
                className="text-secondary/70 list-outside list-disc text-sm font-roboto"
              >
                {desc}
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <p className="font-semibold">Brand</p>
            <h5>{product?.brand}</h5>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Color</p>
            <Color colors={product?.color} />
          </div>
        </div>

        <div className="p-5 space-y-5 border rounded-md h-max">
          <div className="flex justify-between items-center">
            <h5>Delivery</h5>
            <Badge>Free</Badge>
          </div>
          <div className="flex justify-between items-center">
            <h5>Stock</h5>
            <Badge variant={"destructive"}>{inStock}</Badge>
          </div>

          <hr className="bg-gray-50 w-full" />

          <CompareAndWishListBtn product={product} />
          <h2>${product?.price.toFixed(2)}</h2>
          <div className="border rounded-3xl px-2 h-10 flex items-center justify-between w-[208px]">
            <IconButton
              disabled={quantity === 1}
              method={() => setQuantity(quantity - 1)}
              Icon={FiMinus}
              size={16}
              className="bg-transparent"
            />
            <h4 className="py-5">{quantity}</h4>
            <IconButton
              disabled={quantity === inStock}
              method={() => setQuantity(quantity + 1)}
              Icon={BsPlus}
              size={16}
              className="bg-transparent"
            />
          </div>
          <PrimaryButton
            title="Add to Cart"
            className="w-full"
            Icon={HiShoppingBag}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
