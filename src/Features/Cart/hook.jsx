import { useMutation, useQuery } from "react-query";
import {
  addCartItem,
  getCartItem,
  updateCartItem,
  deleteCartItem,
} from "./requests";
import { selectCart, setCart, setTotal } from "./state";
import { selectUser } from "../Users/state";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";

export const useGetCartItems = () => {
  const { items, quantity, total } = useSelector(selectCart);
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const id = user?.cart || -1;

  const {
    isLoading,
    isSuccess,
    data,
    isFetching,
    refetch: GetCartItems,
  } = useQuery(["cart", id], () => getCartItem(id), {
    enabled: false,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setCart({
          items: data?.data?.items,
          quantity: data?.data?.quantity,
        })
      );
    }
  }, [isLoading, isSuccess, isFetching]);

  const setCartTotal = () => {
    const accumulatedTotal = items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.total;
    }, 0);
    dispatch(setTotal({ total: accumulatedTotal }));
  };

  return {
    items,
    GetCartItems,
    quantity,
    cart_id: id,
    total,
    setCartTotal,
  };
};

const useItemValidation = () => {
  const { items } = useSelector(selectCart);
  const validateProduct = (id) => {
    const product = items.filter((pd) => pd.id == id);
    return !!product.length;
  };

  return validateProduct;
};

export const useCartOperations = () => {
  const { user } = useSelector(selectUser);
  const validateProduct = useItemValidation();
  const { GetCartItems } = useGetCartItems();
  // Adding

  const {
    data: AddData,
    isLoading: AddLoading,
    isSuccess: AddSuccess,
    isError: AddError,
    mutateAsync: AddItem,
  } = useMutation(addCartItem);

  const AddingItem = async (data) => {
    const addedProduct = validateProduct(data.product_id);
    if (addedProduct) {
      NotificationManager.error("This product is already added");
      return;
    }
    if (user) {
      await AddItem({
        id: user.cart,
        ...data,
      });
    } else {
      NotificationManager.warning("Please login first");
    }
  };

  useEffect(() => {
    console.log("Cart ITems 2");
    if (AddSuccess) {
      NotificationManager.success("Item added succefully");
      GetCartItems();
    }
    if (AddError) {
      NotificationManager.error("Error happend");
    }
  }, [AddError, AddLoading, AddSuccess]);

  return { AddData, AddLoading, AddingItem };
};

export const useUpdateCartItem = () => {
  const { GetCartItems } = useGetCartItems();

  const {
    isLoading: UpdateLoading,
    isSuccess,
    mutateAsync: UpdateItem,
  } = useMutation(updateCartItem);

  useEffect(() => {
    console.log("Cart ITems 3");
    if (isSuccess) {
      GetCartItems();
    }
  }, [UpdateLoading, isSuccess]);

  return {
    UpdateItem,
    UpdateLoading,
  };
};

export const useDeleteCartItem = () => {
  const { GetCartItems } = useGetCartItems();

  const {
    isLoading: DeleteLoading,
    isSuccess,
    mutateAsync: DeleteItem,
  } = useMutation(deleteCartItem);

  useEffect(() => {
    console.log("Cart ITems 4");
    if (isSuccess) {
      GetCartItems();
    }
  }, [DeleteLoading, isSuccess]);

  return {
    DeleteItem,
    DeleteLoading,
  };
};
