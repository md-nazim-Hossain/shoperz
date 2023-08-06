import AboutProduct from "@/components/Product/AboutProduct";
import ProductBundles from "@/components/Product/ProductBundles";
import ProductDetails from "@/components/Product/ProductDetails";

function page() {
  return (
    <div className="space-y-10">
      <ProductDetails />
      <ProductBundles />
      <AboutProduct />
    </div>
  );
}

export default page;
