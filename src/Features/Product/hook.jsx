import { useQuery } from "react-query";
import { getProductDetails } from "./requests";

import { options } from "..";

export const useProductDeatils = (id) => {
  const { data: productData, isLoading: productDataLoading } = useQuery(
    ["one-product", id],
    () => getProductDetails(id),
    options
  );

  return {
    productData,
    productDataLoading,
  };
};
