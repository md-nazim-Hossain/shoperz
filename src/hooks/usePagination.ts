import { Product } from "@/types";
import { useEffect, useState } from "react";

export const usePagination = (
    products: Product[],
    skip: number,
    limit: number
) => {
    const [product, setProduct] = useState(products);
    const showing = (skip - 1) * limit;
    const totalSkip = skip * limit;
    useEffect(() => {
        if (showing > products.length) setProduct([]);
        setProduct(products?.slice(showing, totalSkip));
    }, [skip, limit]);

    return {
        data: product,
        showing: showing + limit,
        totalSkip: showing === 0 ? 1 : showing,
    };
};
