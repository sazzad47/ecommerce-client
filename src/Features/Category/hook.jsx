import { useState } from "react";
import { useQuery } from "react-query";
import {
  getCategoreis,
  getOneCategory,
  getOneCategoryProducts,
} from "./requests";

import { options } from "..";

export const useCategories = () => {
  return useQuery("get-categories", getCategoreis, options);
};

export const useCategoryList = (id, filter) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data: categoryData, isLoading: categoryDataLoading } = useQuery(
    ["one-category", id],
    () => getOneCategory(id),
    options
  );
  const {
    data: Products,
    isLoading: ProductsLoading,
    isFetching: ProductsPaginateLoading,
    refetch: ProductsRefetch,
  } = useQuery(
    ["one-category-products", id, pageNumber],
    () => getOneCategoryProducts(id, pageNumber, filter),
    { ...options, keepPreviousData: true, enabled: false }
  );

  // make a variable the gather all loading requests in that hook so render the data when all requests loaded
  const DataLoading =
    categoryDataLoading || ProductsLoading || ProductsPaginateLoading;

  return {
    categoryData,
    DataLoading,
    Products,
    setPageNumber,
    pageNumber,
    ProductsPaginateLoading,
    ProductsRefetch,
  };
};
