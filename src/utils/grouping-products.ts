/* eslint-disable @typescript-eslint/no-explicit-any */
import { products } from "@/data/productData";
import { FilterProps, Product } from "@/types";

export const groupProduct = (
  filterType: FilterProps,
  productData?: Product[]
) => {
  const category = new Map();
  const brands = new Map();
  const rating = new Map();
  const price = new Map();
  const ram = new Map();
  const processor = new Map();
  const colors: string[] = [];

  const data = productData || products;

  data.forEach(product => {
    switch (filterType) {
      case "category":
        grouping(category, product, product.slug);
        break;
      case "brand":
        grouping(brands, product, product.brand);
        break;
      case "rating":
        grouping(rating, product, product.rating + "");
      case "price":
        groupingByPrice(price, product);
        break;
      case "ram":
        grouping(ram, product, product.ram!);
        break;
      case "processor":
        grouping(processor, product, product.processor!);
        break;
      case "colors":
        product.color.forEach(color => {
          if (!colors.includes(color)) colors.push(color);
        });
        break;
      default:
        grouping(rating, product, product.rating + "");
        grouping(category, product, product.slug);
        grouping(brands, product, product.brand);
        groupingByPrice(price, product);
        grouping(ram, product, product.ram!);
        grouping(processor, product, product.processor!);
        product.color.forEach(color => {
          if (!colors.includes(color)) colors.push(color);
        });
    }
  });

  return {
    category,
    brands,
    rating,
    price,
    ram,
    processor,
    colors,
  };
};

const grouping = (
  map: Map<string, Product[] | any>,
  product: Product,
  key: string
) => {
  if (!key) return;
  if (!map.has(key)) {
    map.set(key, [product]);
  } else {
    map.set(key, [...map.get(key), product]);
  }
};

const groupingByPrice = (
  map: Map<string, Product[] | any[]>,
  product: Product
) => {
  const price = product?.price;
  if (price < 100) {
    grouping(map, product, "50");
  } else if (price >= 100 && price < 200) {
    grouping(map, product, "100");
  } else if (price >= 200 && price < 300) {
    grouping(map, product, "200");
  } else if (price >= 300 && price < 400) {
    grouping(map, product, "300");
  } else if (price >= 400 && price < 500) {
    grouping(map, product, "400");
  } else {
    grouping(map, product, "500");
  }
};
