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
import PrimaryButton from "./Buttons/PrimaryButton";
import { HiShoppingBag } from "react-icons/hi";
import CompareAndWishListProductCard from "./CompareAndWishListProductCard";

type Props = {
    trigger: React.ReactNode;
    products: Product[];
    className?: string;
    title: string;
    description?: string;
    type?: "wishlist" | "comparelist";
};
export function SheetContainer({
    trigger,
    products,
    className,
    title,
    description,
    type,
}: Props) {
    return (
        <Sheet>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetContent className="space-y-5 p-3 overflow-y-auto scroll">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    {description && (
                        <SheetDescription>{description}</SheetDescription>
                    )}
                </SheetHeader>
                <div className="space-y-5">
                    {products.map((product: Product, index: number) => {
                        return (
                            <CompareAndWishListProductCard
                                type={type}
                                product={product}
                                key={index}
                            />
                        );
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
