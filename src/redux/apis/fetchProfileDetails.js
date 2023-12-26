import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const profileFetchAPI = (formData) => {
  return axios.post(`${BASE_URL}/creator/fetch-creater-details`, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};