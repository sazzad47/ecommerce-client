import { useCategories, useCategoryList } from "./Category/hook";
import { useProductDeatils } from "./Product/hook";
import { useProperties } from "./Properties/hook";
import { useOrderOperations, useGetOrders } from "./Order//hook";
import {
  useCreateUser,
  useLogin,
  useUserDetails,
  useUserManipulation,
} from "./Users/hook";
import {
  useGetCartItems,
  useCartOperations,
  useUpdateCartItem,
  useDeleteCartItem,
} from "./Cart/hook";
import { useHome, usePages, useRecommendations } from "./Home/hook";
import { useSearch } from "./Search/hook";

export const options = {
  cacheTime: 300000,
  staleTime: 60000,
};

export const CategoriesHooks = {
  useCategories,
  useCategoryList,
};

export const ProductHooks = {
  useProductDeatils,
};

export const PropHooks = {
  useProperties,
};

export const OrderHooks = {
  useOrderOperations,
  useGetOrders,
};

export const UserHooks = {
  useCreateUser,
  useLogin,
  useUserDetails,
  useUserManipulation,
};

export const CartHooks = {
  useGetCartItems,
  useCartOperations,
  useUpdateCartItem,
  useDeleteCartItem,
};

export const HomeHooks = {
  useHome,
  usePages,
  useRecommendations,
};

export const SearchHooks = {
  useSearch,
};
