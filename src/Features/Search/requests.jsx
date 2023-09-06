import axios from "axios";
import { BASE_API } from "../../constants";

export const getProduct = async (name) => {
  return await axios.get(`${BASE_API}/product/q/search?name=${name}`);
};
