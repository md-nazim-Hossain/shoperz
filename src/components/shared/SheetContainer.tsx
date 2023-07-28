import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Product } from "@/types";
import SecondaryProductCard from "./SecondaryProductCard";
import PrimaryButton from "./Buttons/PrimaryButton";
import { HiShoppingBag } from "react-icons/hi";

type Props = {
  trigger: React.ReactNode;
  products: Product[];
  className?: string;
  title: string;
  description?: string;
};
export function SheetContainer({
  trigger,
  products,
  className,
  title,
  description,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="space-y-5 overflow-x-scroll scroll px-3">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="space-y-5">
          {products.map((product: Product, index: number) => {
            return <SecondaryProductCard product={product} key={index} />;
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <PrimaryButton
              title="Add to Cart"
              className="w-full"
              Icon={HiShoppingBag}
            />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
