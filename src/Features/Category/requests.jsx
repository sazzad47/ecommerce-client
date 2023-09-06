import axios from "axios";
import { BASE_API, PAGINATION_LIMIT } from "../../constants";

export const getCategoreis = () => {
  return axios.get(`${BASE_API}/category/all`);
};

export const getOneCategory = (id) => {
  return axios.get(`${BASE_API}/category/${id}`);
};

export const getOneCategoryProducts = (id, pageNumber, filter) => {
  return axios.post(
    `${BASE_API}/category/products/${id}?limit=${PAGINATION_LIMIT}&page=${pageNumber}`,
    { filter }
  );
};
