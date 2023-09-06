import axios from "axios";
import { BASE_API } from "../../constants";

export const createOrder = async (data) => {
  return await axios.post(`${BASE_API}/order`, data);
};

export const getRecent = async (id) => {
  return await axios.get(`${BASE_API}/order/user/recent?user_id=${id}`);
};

export const getAll = async (id) => {
  return await axios.get(`${BASE_API}/order/user/all/${id}`);
};
