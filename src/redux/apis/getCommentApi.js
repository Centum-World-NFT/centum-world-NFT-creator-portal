import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const getCommentForCreatorApi = (payload) => {
  return axios.get(`${BASE_URL}/video/get-comments/${payload}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};