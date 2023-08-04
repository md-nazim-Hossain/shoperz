"use client";

import { useAppDispatch, useAppSelector } from "@/redux/Store";
import {
    toggleCompareList,
    toggleWishList,
} from "@/redux/slices/ToggleAddListProductSlice";
import { Product } from "@/types";
import { discountPrice } from "@/utils/discount";
import Image from "next/image";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { CiShuffle } from "react-icons/ci";
import { HiShoppingBag } from "react-icons/hi";
import { useToast } from "../ui/use-toast";
import PrimaryButton from "./Buttons/PrimaryButton";
import Rating from "./Rating";
import { TooltipContainer } from "./ToolTipContainer";

type Props = {
    product: Product;
};
function ListViewProducts({ product }: Props) {
    const { wishListProduct, compareListProduct } = useAppSelector(
        state => state.toggleAddProductList
    );
    const isWishList = wishListProduct.includes(product);
    const isCompareList = compareListProduct.includes(product);
    const dispatch = useAppDispatch();
    const { toast } = useToast();

    return (
        <div className="group p-5 border border-light-gray rounded-md lg:flex gap-5 space-y-5 lg:space-y-0">
            <div className="md:flex flex-1 items-center gap-5">
                <div className="w-full md:w-auto sm:aspect-square h-[240px] flex justify-center items-center">
                    <div className="w-[200px] cursor-pointer aspect-square relative">
                        <Image
                            fill
                            alt="Products Images"
                            src={product?.image[0]}
                            className="group-hover:invisible group-hover:opacity-0 group-hover:scale-x-0 duration-500 ease-in-out"
                        />
                        <Image
                            fill
                            alt="Products Images"
                            src={product?.image[1]}
                            className="opacity-0 invisible scale-x-0 group-hover:visible group-hover:opacity-100 group-hover:scale-x-100 duration-500 ease-in-out"
                        />
                    </div>
                </div>
                <div className="flex-1 space-y-5">
                    <h6>
                        {product?.category}, {product?.subCategory}
                    </h6>
                    <TooltipContainer
                        trigger={
                            <h5 className="text-primary font-medium line-clamp-2">
                                {product?.model}
                            </h5>
                        }
                    >
                        <h5 className="text-primary font-medium">
                            {product?.model}
                        </h5>
                    </TooltipContainer>
                    <Rating value={product?.rating} />

                    <ul className="list-disc space-y-2">
                        {product?.description.map(
                            (item: string, index: number) => (
                                <li
                                    key={index}
                                    className="text-sm text-secondary/70"
                                >
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-[30%] md:w-1/2 lg:flex justify-center items-start ml-auto">
                <div className="space-y-5">
                    <div className="flex items-center gap-2">
                        <PrimaryButton
                            method={() => {
                                dispatch(toggleCompareList(product));

                                toast({
                                    title: isCompareList
                                        ? "Removed from Compare List"
                                        : "Added to Compare List",
                                    description: (
                                        <h6 className="text-tertiary">
                                            <span className="font-semibold">
                                                {product.model}
                                            </span>{" "}
                                            {isWishList ? "removed" : "added"}{" "}
                                            to your compare list
                                        </h6>
                                    ),
                                });
                            }}
                            title="Compare"
                            className="bg-white group/compare border hover:bg-gray-200 hover:border-transparent hover:text-tertiary duration-300 text-secondary/70 font-normal"
                            Icon={CiShuffle}
                            iconStyle="group-hover/compare:text-primary"
                        />
                        <PrimaryButton
                            method={() => {
                                dispatch(toggleWishList(product));
                                toast({
                                    title: isWishList
                                        ? "Removed from Wishlist"
                                        : "Added to Wishlist",
                                    description: (
                                        <h6 className="text-tertiary">
                                            <span className="font-semibold">
                                                {product.model}
                                            </span>{" "}
                                            {isWishList ? "removed" : "added"}{" "}
                                            to your Wishlist
                                        </h6>
                                    ),
                                });
                            }}
                            title="Wishlist"
                            className="bg-white group/wishList border hover:bg-gray-200 hover:border-transparent hover:text-tertiary duration-300 text-secondary/70 font-normal"
                            Icon={isWishList ? BiSolidHeart : BiHeart}
                            iconStyle="group-hover/wishList:text-red-500"
                        />
                    </div>

                    <div>
                        {product?.discount > 0 ? (
                            <div>
                                <h4 className="font-bold text-danger">
                                    {discountPrice(
                                        product?.price,
                                        product?.discount
                                    )}
                                </h4>
                                <h6 className="line-through text-tertiary">
                                    ${(product?.price).toFixed(2)}
                                </h6>
                            </div>
                        ) : (
                            <h4 className="font-bold">
                                ${(product?.price).toFixed(2)}
                            </h4>
                        )}
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

export default ListViewProducts;
