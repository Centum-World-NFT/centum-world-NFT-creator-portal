import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const commentApiForCreator = (payload) => {
  return axios.post(`${BASE_URL}/video/add-comment`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};