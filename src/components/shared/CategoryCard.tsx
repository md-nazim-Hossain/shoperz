import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import IconButton from "./Buttons/IconButton";

type Props = {
  product: Product;
};

function CategoryCard({ product }: Props) {
  return (
    <div className="border p-4 space-y-4 bg-white rounded-md group">
      <p className="font-medium text-center">{product?.category}</p>
      <div className="w-[200px] relative aspect-square mx-auto group overflow-hidden cursor-pointer">
        <Image
          fill
          className="z-10 group-hover:opacity-0 group-hover:-translate-x-full group-hover:left-full duration-500 ease-in-out"
          alt="Products Images"
          src={product?.image[0]}
        />
        <Image
          fill
          className="opacity-0 left-full translate-x-full group-hover:translate-x-0 group-hover:left-0 group-hover:z-10 group-hover:opacity-100 duration-500 ease-in-out"
          alt="Products Images"
          src={product?.image[1]}
        />
      </div>
      <Link
        href={`/shop/${product?.slug}`}
        className="flex justify-end items-center"
      >
        <IconButton
          className="group-hover:bg-primary/70 hover:!bg-primary text-white"
          Icon={BsArrowRight}
        />
      </Link>
    </div>
  );
}

export default CategoryCard;
