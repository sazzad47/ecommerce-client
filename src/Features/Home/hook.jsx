import { useQuery } from "react-query";
import { getLists, getPages, getRecommendations } from "./requests";
import useIsLogged from "../../Hooks/useIsLogged";
export const useHome = () => {
  const {
    isLoading: InitialLoading,
    isSuccess: InitialSuccess,
    refetch: GetInitial,
    data: InitialData,
  } = useQuery(["Initial"], () => getLists(), {
    cacheTime: 5000,
    enabled: false,
  });

  return {
    InitialLoading,
    InitialSuccess,
    GetInitial,
    InitialData,
  };
};

export const usePages = () => {
  const {
    isLoading: PagesLoading,
    isSuccess: PagesSuccess,
    refetch: GetPages,
    data: PagesData,
  } = useQuery(["pages"], () => getPages(), {
    cacheTime: 0,
    enabled: false,
  });

  return {
    PagesLoading,
    PagesSuccess,
    GetPages,
    PagesData,
  };
};

export const useRecommendations = () => {
  const { logged, user } = useIsLogged();

  const {
    isLoading: RecommendLoading,
    isSuccess: RecommendSuccess,
    refetch: GetRecommend,
    data: RecommendData,
  } = useQuery(
    ["recommendations"],
    () => getRecommendations(logged ? user.id : -1),
    {
      cacheTime: 60000,
      enabled: false,
    }
  );
  return {
    RecommendLoading,
    RecommendSuccess,
    GetRecommend,
    RecommendData,
  };
};
