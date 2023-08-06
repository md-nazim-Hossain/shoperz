"use client";
import { useAppDispatch, useAppSelector } from "@/services/redux/Store";
import { toggleView } from "@/services/redux/slices/ToggleViewSlice";
import { Product } from "@/types";
import { usePathname } from "next/navigation";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Button } from "../ui/button";

type Props = {
  filterProduct: Product[];
  showing: number;
  totalSkip: number;
};
function ShopSearchBar({ filterProduct, showing, totalSkip }: Props) {
  const pathname = usePathname();
  const text = pathname.split("/");
  const dispatch = useAppDispatch();
  const { view } = useAppSelector(state => state.view);
  const totalProductLen = filterProduct?.length;

  return (
    <div className="p-5 border rounded-md border-light-gray">
      <div className="pb-5 border-b border-b-light-gray flex justify-between items-center">
        <h2>{text[text.length - 1]}</h2>
        <h5>
          Showing{" "}
          <span className="font-bold text-tertiary">
            {totalSkip}-{totalProductLen > showing ? showing : totalProductLen}
          </span>{" "}
          of <span className="font-bold text-tertiary">{totalProductLen}</span>
        </h5>
      </div>
      <div className="pt-5">
        <div className="space-x-3">
          <Button
            onClick={() => dispatch(toggleView("grid"))}
            className={`bg-transparent text-tertiary hover:bg-secondary/10 ${
              view === "grid" && "bg-secondary/10"
            }`}
          >
            <BsGrid3X3GapFill size={16} />
          </Button>
          <Button
            onClick={() => dispatch(toggleView("list"))}
            className={`bg-transparent text-tertiary hover:bg-secondary/10 ${
              view === "list" && "bg-secondary/10"
            }`}
          >
            <FaListUl size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopSearchBar;
