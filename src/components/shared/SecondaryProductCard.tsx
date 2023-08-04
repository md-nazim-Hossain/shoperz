import { Product } from "@/types";
import { discountPrice } from "@/utils/discount";
import Image from "next/image";
import Link from "next/link";
import HoverVisibleButton from "./Buttons/HoverVisibleButton";
import IconButton from "./Buttons/IconButton";
import Rating from "./Rating";
import { TooltipContainer } from "./ToolTipContainer";

type Props = {
  product: Product;
};
function SecondaryProductCard({ product }: Props) {
  return (
    <div className="bg-white hover:shadow-md cursor-pointer group border p-4 flex justify-center gap-6 items-center rounded-md">
      <div className="w-[110px] aspect-square relative">
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
      <div className="space-y-5 flex-1">
        <TooltipContainer
          trigger={
            <h5 className="text-primary font-medium cursor-pointer line-clamp-1 w-[86%]">
              {product?.model}
            </h5>
          }
        >
          <h5 className="text-primary font-medium">{product?.model}</h5>
        </TooltipContainer>
        <Rating value={product?.rating} />
        <div className="flex justify-between items-center h-12 relative">
          {product?.discount > 0 ? (
            <>
              <div>
                <h4 className="font-bold text-danger">
                  {discountPrice(product?.price, product?.discount)}
                </h4>
                <h6 className="line-through text-tertiary">
                  ${(product?.price).toFixed(2)}
                </h6>
              </div>
            </>
          ) : (
            <>
              <h4 className="font-bold">${(product?.price).toFixed(2)}</h4>
            </>
          )}
          <Link
            href={`/shop/${
              product?.slug
            }/${product.subCategory.toLowerCase()}/${product?.id}`}
          >
            <IconButton className="group-hover:bg-primary/70 hover:!bg-primary" />
          </Link>
          <HoverVisibleButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default SecondaryProductCard;
