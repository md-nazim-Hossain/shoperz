"use client"
import React from 'react'
import { CiShuffle } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { toggleCompareList, toggleWishList } from "@/redux/slices/ToggleAddListProductSlice";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { useToast } from '@/components/ui/use-toast';
import { Product } from '@/types';
import IconButton from './IconButton';

type Props = {
  product: Product;
};
function HoverVisibleButton({ product }: Props) {
      const { wishListProduct, compareListProduct } = useAppSelector(
    (state) => state.toggleAddProductList
  );
  const dispatch = useAppDispatch();
  const { toast } = useToast();
    const isWishList = wishListProduct.includes(product);
  const isCompareList = compareListProduct.includes(product);
  return (
     <div className="duration-300 origin-right ease-in-out transition-all opacity-0 group-hover:opacity-100 absolute bottom-12 group-hover:z-20 right-0 space-y-1.5 translate-x-[100px] group-hover:translate-x-0">
          <IconButton  method={() => {
                dispatch(toggleWishList(product));
                toast({
                  title: isWishList
                    ? "Removed from Wishlist"
                    : "Added to Wishlist",
                  description: (
                    <h6 className="text-tertiary">
                      <span className="font-semibold">{product.model}</span>{" "}
                      {isWishList ? "removed" : "added"} to your Wishlist
                    </h6>
                  ),
                });
              }} size={14} className="group shadow bg-gray-50 hover:bg-white backdrop:inset-0 hover:backdrop:bg-white inset-1 text-secondary hover:text-red-500" Icon={isWishList ? BiSolidHeart : BiHeart}/>
          <IconButton method={()=>{
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
              size={16} className="group shadow bg-gray-50 hover:bg-white backdrop:inset-0 hover:backdrop:bg-white inset-1 text-secondary hover:text-primary/70" Icon={CiShuffle}/>
        </div>
  )
}

export default HoverVisibleButton