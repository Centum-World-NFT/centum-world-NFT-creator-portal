import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const accountAPI = (payload) => {
  return axios.post(`${BASE_URL}/creator/update-creator`, payload);
};
