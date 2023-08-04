import { products } from "@/data/productData";
import { Product } from "@/types";
import TopProduct from "../TopProduct";

function TopProducts() {
    const topRated = products
        .filter((product: Product) => product?.rating === 5)
        .slice(0, 3);

    const bestSellers = products
        .filter(
            (product: Product) =>
                product?.sold >= Math.floor(product?.quantity / 4) * 3
        )
        .slice(0, 3);

    const megaOffers = products
        .filter((product: Product) => product?.discount > 0)
        .slice(0, 3);

    return (
        <div className="bg-light-gray py-5 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Top rated products */}
                <TopProduct products={topRated} title="Top Rated" />

                {/* Best Sellers products */}
                <TopProduct products={bestSellers} title="Best Sellers" />

                {/* Mega offers products */}
                <TopProduct products={megaOffers} title="Mega Offers" />
            </div>
        </div>
    );
}

export default TopProducts;
