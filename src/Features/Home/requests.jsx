import axios from "axios";
import { BASE_API } from "../../constants";

export const getLists = async () => {
  return await axios.get(`${BASE_API}/home`);
};

export const getPages = async () => {
  return await axios.get(`${BASE_API}/dash/pages`);
};

export const getRecommendations = async (id) => {
  return await axios.get(`${BASE_API}/recommend/${id}`);
};
