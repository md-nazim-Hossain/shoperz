export const discountPrice = (price: number, discount: number): string => {
    let discountPrice: number | string =
        price - Math.floor((price * discount) / 100);
    discountPrice = discountPrice.toFixed(2);
    return "$" + discountPrice;
};
