import { useQuery } from "react-query";
import { getPropertyValue } from "./requests";
import { options } from "..";

export const useProperties = (id, type) => {
  const { data: propData, isLoading: propDataLoading } = useQuery(
    ["prop-values", id , type],
    () => getPropertyValue(id, type),
    options
  );

  return {
    propData,
    propDataLoading,
  };
};
