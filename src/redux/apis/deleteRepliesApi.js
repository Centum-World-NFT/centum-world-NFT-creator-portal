import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const deleteReplyApi = (payload) => {
    console.log(payload, localStorage.getItem("access_token"))
  return axios.delete(`${BASE_URL}/video/delete-reply/${payload}`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};