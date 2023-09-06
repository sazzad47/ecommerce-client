import axios from "axios";
import { BASE_API } from "../../constants";

export const addCartItem = async (data) => {
  return await axios.post(`${BASE_API}/cart/${data.id}/items`, data);
};
export const getCartItem = async (id) => {
  return await axios.get(`${BASE_API}/cart/${id}/items`);
};

export const updateCartItem = async (data) => {
  return await axios.put(`${BASE_API}/cart/${data.id}/items`, data);
};

export const deleteCartItem = async (data) => {
  return await axios.delete(
    `${BASE_API}/cart/${data.id}/items?product_id=${data.product_id}`
  );
};
