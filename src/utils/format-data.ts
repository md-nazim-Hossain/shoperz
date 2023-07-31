export const numberFormat = (data: string) => {
  return data.length > 2 ? "99+" : data;
};

export const formatPriceFilterKey = (key: string) => {
  const price = +key;
  if (price === 50) {
    return "<50";
  } else if (price === 500) {
    return ">500";
  } else {
    return price + "-" + (price + 100);
  }
};
