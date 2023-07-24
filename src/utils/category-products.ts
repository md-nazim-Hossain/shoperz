import { products } from "@/data/productData";
import { Product } from "@/types/types";

export const groupProduct = (
  filterType: "category" | "brand" | "rating" | ""
) => {
  const slug = new Map();
  const brands = new Map();
  const rating = new Map();

  products.forEach((product) => {
    switch (filterType) {
      case "category":
        grouping(slug, product, product.slug);
        break;
      case "brand":
        grouping(brands, product, product.brand);
        break;
      case "rating":
        grouping(rating, product, product.rating + "");
        break;
      default:
        grouping(rating, product, product.rating + "");
        grouping(slug, product, product.slug);
        grouping(brands, product, product.brand);
    }
  });

  return {
    slug,
    brands,
    rating,
  };
};

const grouping = (
  map: Map<string, Product[] | any>,
  product: Product,
  key: string
) => {
  if (!map.has(key)) {
    map.set(key, [product]);
  } else {
    map.set(key, [...map.get(key), product]);
  }
};
