import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const accountApi = (payload) => {
  return axios.post(`${BASE_URL}/creator/fetch-creater-details`, payload);
};
