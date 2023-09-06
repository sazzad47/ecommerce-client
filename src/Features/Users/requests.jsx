import axios from "axios";
import { BASE_API } from "../../constants";

export const LoginUser = (userData) => {
  return axios.post(`${BASE_API}/users/login`, userData);
};

export const createUser = (userData) => {
  return axios.post(`${BASE_API}/users`, userData);
};

export const updateUser = (userData) => {
  return axios.put(`${BASE_API}/users/${userData.user_id}`, userData);
};

export const addAddress = (data) => {
  return axios.post(`${BASE_API}/users/address`, data);
};
export const updateAddress = (data) => {
  return axios.put(`${BASE_API}/users/address/${data.address_id}`, data);
};
