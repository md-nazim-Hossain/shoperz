import { Product } from "@/types";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ScrollArea } from "../ui/scroll-area";
import PopoverContainer from "./PopoverContainer";
import SecondaryProductCard from "./SecondaryProductCard";

type Props = {
  products: Product[];
  trigger?: ReactNode;
  open?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>>;
};
export function SearchProductModal({
  products,
  trigger,
  onChange,
  open,
}: Props) {
  return (
    <PopoverContainer
      open={open}
      onChange={onChange}
      trigger={trigger}
      className="w-full sm:w-[400px] max-w-[400px] p-0"
    >
      <ScrollArea className="max-h-[70vh] p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Search Products
        </h4>
        {products.length > 0 ? (
          <div className="space-y-5">
            {products.map((product: Product, index: number) => (
              <SecondaryProductCard product={product} key={index} />
            ))}
          </div>
        ) : (
          <div>Not Found</div>
        )}
      </ScrollArea>
    </PopoverContainer>
  );
}
