"use client";

import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/services/redux/Store";
import {
  toggleCompareList,
  toggleWishList,
} from "@/services/redux/slices/ToggleAddListProductSlice";
import { Product } from "@/types";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { CiShuffle } from "react-icons/ci";
import PrimaryButton from "./PrimaryButton";

type Props = {
  product: Product;
};
function CompareAndWishListBtn({ product }: Props) {
  const { wishListProduct, compareListProduct } = useAppSelector(
    state => state.toggleAddProductList
  );

  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const isWishList = wishListProduct.includes(product);
  const isCompareList = compareListProduct.includes(product);
  return (
    <div className="w-full flex items-center gap-3">
      <PrimaryButton
        method={() => {
          dispatch(toggleCompareList(product));

          toast({
            title: isCompareList
              ? "Removed from Compare List"
              : "Added to Compare List",
            description: (
              <h6 className="text-tertiary">
                <span className="font-semibold">{product.model}</span>{" "}
                {isWishList ? "removed" : "added"} to your compare list
              </h6>
            ),
          });
        }}
        title="Compare"
        className="bg-white w-full py-2 group/compare border hover:bg-gray-200 hover:border-transparent hover:text-tertiary duration-300 text-secondary/70 font-normal"
        Icon={CiShuffle}
        iconStyle="group-hover/compare:text-primary"
      />
      <PrimaryButton
        method={() => {
          dispatch(toggleWishList(product));
          toast({
            title: isWishList ? "Removed from Wishlist" : "Added to Wishlist",
            description: (
              <h6 className="text-tertiary">
                <span className="font-semibold">{product.model}</span>{" "}
                {isWishList ? "removed" : "added"} to your Wishlist
              </h6>
            ),
          });
        }}
        title="Wishlist"
        className="bg-white w-full py-2 group/wishList border hover:bg-gray-200 hover:border-transparent hover:text-tertiary duration-300 text-secondary/70 font-normal"
        Icon={isWishList ? BiSolidHeart : BiHeart}
        iconStyle="group-hover/wishList:text-red-500"
      />
    </div>
  );
}

export default CompareAndWishListBtn;
