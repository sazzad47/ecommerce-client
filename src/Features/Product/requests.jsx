import axios from "axios";
import { BASE_API } from "../../constants";

export const getProductDetails = (id) => {
  return axios.get(`${BASE_API}/product/${id}?productpage=true`);
};
