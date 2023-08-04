import { Product } from "@/types";
import Rating from "../shared/Rating";
import { Checkbox } from "../ui/checkbox";

type Props = {
  product: Map<string, Product[]>;
};
function FilterByRating({ product }: Props) {
  return (
    <div className="p-5 space-y-5 border rounded-md">
      <p className="font-medium">Rating</p>
      <div className="space-y-5">
        {Array.from(product).map(([key, value], index: number) => {
          return (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={key} />
              <label
                htmlFor={key}
                className="flex capitalize items-center gap-x-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <Rating value={value[index]?.rating} />
                <h5 className="text-secondary/60">({value?.length})</h5>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterByRating;
