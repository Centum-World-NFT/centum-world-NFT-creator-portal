import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const likeVideoApi = (payload) => {
  return axios.put(`${BASE_URL}/video/like-video/${payload}`,{} ,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};