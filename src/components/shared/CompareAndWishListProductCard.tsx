"use client";
import { useAppDispatch } from "@/services/redux/Store";
import {
  toggleCompareList,
  toggleWishList,
} from "@/services/redux/slices/ToggleAddListProductSlice";
import { Product } from "@/types";
import { discountPrice } from "@/utils/discount";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import { useToast } from "../ui/use-toast";
import IconButton from "./Buttons/IconButton";
import Rating from "./Rating";
import { TooltipContainer } from "./ToolTipContainer";
type Props = {
  product: Product;
  type?: "wishlist" | "comparelist";
};
function CompareAndWishListProductCard({ product, type }: Props) {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const isWishList = type === "wishlist";
  return (
    <div className="bg-white  group border p-2 flex justify-center gap-2 items-center rounded-md">
      <div className="w-[80px] cursor-pointer flex-shrink-0 aspect-square relative">
        <Image
          fill
          alt="Products Images"
          src={product?.image[0]}
          className="z-10 group-hover:opacity-0 duration-500 ease-in-out"
        />
        <Image
          fill
          alt="Products Images"
          src={product?.image[1]}
          className="opacity-0  group-hover:z-10 group-hover:opacity-100 duration-500 ease-in-out"
        />
      </div>
      <div className="space-y-1 flex-1">
        <TooltipContainer
          trigger={
            <h6 className="text-primary font-medium line-clamp-1 cursor-pointer">
              {product?.model}
            </h6>
          }
        >
          <h6 className="text-primary font-medium">{product?.model}</h6>
        </TooltipContainer>
        <Rating value={product?.rating} />
        <div className="flex justify-between items-center h-max">
          {product?.discount > 0 ? (
            <>
              <div>
                <h5 className="font-bold text-danger">
                  {discountPrice(product?.price, product?.discount)}
                </h5>
                <h6 className="line-through text-tertiary">
                  ${(product?.price).toFixed(2)}
                </h6>
              </div>
            </>
          ) : (
            <>
              <h5 className="font-bold text-tertiary">
                ${(product?.price).toFixed(2)}
              </h5>
            </>
          )}
          <div className="flex items-center gap-2">
            <IconButton className="w-7 group-hover:bg-primary/70 hover:!bg-primary" />
            <IconButton
              method={() => {
                if (isWishList) {
                  dispatch(toggleWishList(product));
                } else {
                  dispatch(toggleCompareList(product));
                }
                toast({
                  title: `Removed from ${
                    isWishList ? "Wish List" : "Compare List"
                  }`,
                  description: (
                    <h6 className="text-tertiary">
                      <span className="font-semibold">{product.model}</span>{" "}
                      removed to your{" "}
                      {isWishList ? "Wish List" : "Compare List"}
                    </h6>
                  ),
                });
              }}
              className="w-7 text-white hover:!bg-primary"
              size={16}
              Icon={FiMinus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareAndWishListProductCard;
