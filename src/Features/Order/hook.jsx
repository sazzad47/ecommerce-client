import { useMutation, useQuery } from "react-query";
import { createOrder, getRecent, getAll } from "./requests";
import { selectUser } from "../Users/state";
import { useSelector } from "react-redux";

export const useGetOrders = () => {
  const { user } = useSelector(selectUser);

  const id = user?.id;

  const {
    isLoading: RecentLoading,
    data: RecentData,
    isSuccess: RecentSuccess,
    refetch: GetRecent,
  } = useQuery(["order", id], () => getRecent(id), {
    enabled: false,
    cacheTime: 0,
  });

  const {
    isLoading: AllLoading,
    data: AllData,
    isSuccess: AllSuccess,
    refetch: GetAll,
  } = useQuery(["order", id], () => getAll(id), {
    enabled: false,
    cacheTime: 0,
  });

  return {
    RecentLoading,
    RecentData,
    GetRecent,
    RecentSuccess,

    AllLoading,
    AllData,
    AllSuccess,
    GetAll,
  };
};

export const useOrderOperations = () => {
  const { user } = useSelector(selectUser);
  const {
    isLoading: CreateLoading,
    isSuccess: CreateSuccess,
    mutateAsync: CreateOrder,
  } = useMutation(createOrder);

  const Submit = (data) => {
    CreateOrder({
      user_id: user.id,
      ...data,
    });
  };

  return { CreateSuccess, CreateLoading, Submit };
};
