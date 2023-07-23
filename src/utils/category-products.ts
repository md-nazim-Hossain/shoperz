import { products } from "@/data/productData";

export const groupProductBySlug = () => {
  const data = new Map();
  products.forEach((product) => {
    if (!data.has(product.slug)) {
      data.set(product.slug, [product]);
    } else {
      data.set(product.slug, [...data.get(product.slug), product]);
    }
  });

  return data;
};
