import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const blockUserApi = (payload) => {
  return axios.post(`${BASE_URL}/creator/block-and-unblock-subscriber`, payload);
};