import { useMutation } from "react-query";
import {
  LoginUser,
  createUser,
  addAddress,
  updateAddress,
  updateUser,
} from "./requests";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./state";
import { useEffect } from "react";
export const useLogin = () => {
  const { mutate, isError, isLoading, error } = useMutation(LoginUser, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      window.location.reload();
    },
  });

  return {
    mutate,
    isError,
    isLoading,
    error,
  };
};

export const useCreateUser = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useMutation(createUser, {
    onSuccess: () => {
      localStorage.setItem("successRegistration", true);
      navigate("/login");
    },
  });
  return {
    mutate,
    isLoading,
    isError,
    error,
  };
};

export const useUserDetails = () => {
  const { user } = useSelector(selectUser);

  return {
    user: { ...user },
  };
};

export const useUserManipulation = () => {
  const {
    mutate: addAddressMutation,
    isSuccess: addSuccess,
    isLoading: addLoading,
    data: addData,
  } = useMutation(addAddress);

  const {
    mutate: updateAddressMutation,
    isSuccess: updateSuccess,
    isLoading: updateLoading,
    data: updateData,
  } = useMutation(updateAddress);

  const {
    mutate: updateUserMutation,
    isSuccess: updateUserSuccess,
    isLoading: updateUserLoading,
    data: updateUserData,
  } = useMutation(updateUser);

  const dispatch = useDispatch();



  // when update information
  const refreshToken = (data) => {
    if (data?.data) {
      dispatch(setUser({ token: data?.data.token }));
      localStorage.setItem("token", data?.data.token);
    }
  };

  useEffect(() => {
    if (addSuccess) {
      refreshToken(addData);
    }
    if (updateSuccess) {
      refreshToken(updateData);
    }
    if (updateUserSuccess) {
      refreshToken(updateUserData);
    }
  }, [
    addLoading,
    addSuccess,
    updateSuccess,
    updateLoading,
    updateUserSuccess,
    updateUserLoading,
  ]);

  return {
    addAddressMutation,
    addSuccess,
    addLoading,

    updateAddressMutation,
    updateSuccess,
    updateLoading,

    updateUserMutation,
    updateUserSuccess,
    updateUserLoading,
  };
};
