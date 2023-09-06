import { useQuery } from "react-query";
import { getProduct } from "./requests";

export const useSearch = (query) => {
  const {
    isLoading: SearchLoading,
    isSuccess: SearchSuccess,
    refetch: GetSearch,
    data: SearchData,
  } = useQuery(["Search"], () => getProduct(query), {
    cacheTime: 5000,
    enabled: false,
  });

  return {
    SearchLoading,
    SearchSuccess,
    GetSearch,
    SearchData,
  };
};
