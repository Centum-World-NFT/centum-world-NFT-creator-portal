import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const deleteCommentApi = (payload) => {
    console.log(payload, localStorage.getItem("access_token"))
  return axios.delete(`${BASE_URL}/video/delete-comment/${payload}`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};