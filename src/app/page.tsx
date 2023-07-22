import Categories from "@/components/categories/Categories";
import Banner from "@/components/shared/Banner";
import SwiperContainer from "@/components/shared/SwiperContainer";
import { bannerData } from "@/data/bannerData";
import { products } from "@/data/productData";

export default function Home() {
  const filterProducts = products.filter((product) => product.discount === 0);
  return (
    <main className="py-10 space-y-10">
      <SwiperContainer products={filterProducts} title="Featured Products" />
      <Categories />
      <SwiperContainer products={filterProducts} title="Best Sellers" />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5">
        {bannerData.map((banner: Banner, index: number) => {
          return <Banner key={index} banner={banner} />;
        })}
      </div>
      <SwiperContainer
        products={products.filter((product) => product.discount > 0)}
        title="Big Deals"
      />
    </main>
  );
}
