import axios from "axios";
import { BASE_API } from "../../constants";

export const getPropertyValue = (id, type) => {
  return axios.get(`${BASE_API}/${type}/values/${id}`);
};
