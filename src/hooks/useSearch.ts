import { Product } from "@/types";
import { useEffect, useState } from "react";

export const useSearchElement = (data: Product[]) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(data);
  const searchLower = search.toLowerCase();
  useEffect(() => {
    const filterData = data?.filter((item: Product) => {
      return (
        item?.category?.toLowerCase()?.includes(searchLower) ||
        item?.brand?.toLowerCase()?.includes(searchLower) ||
        item?.slug?.includes(searchLower) ||
        item?.price === +searchLower
      );
    });
    setSearchData(filterData);
  }, [search, data]);

  return {
    setSearch,
    data: searchData,
  };
};
