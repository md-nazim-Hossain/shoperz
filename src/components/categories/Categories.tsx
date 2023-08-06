import { products } from "@/data/productData";
import { groupProduct } from "@/utils/grouping-products";
import CategoryCard from "../shared/CategoryCard";
import TitleWrapper from "../shared/TitleWrapper";

function Categories() {
  const { category } = groupProduct("category", products);
  return (
    <div className="bg-secondary/10 pb-14 pt-3">
      <div className="container space-y-5">
        <TitleWrapper title="Categories" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from(category).map(([key, product]) => {
            return <CategoryCard key={key} product={product[0]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
