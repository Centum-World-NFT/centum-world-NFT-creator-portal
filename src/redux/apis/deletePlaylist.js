import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const deleteplaylistApi = (payload) => {
  console.log(payload);
  return axios.delete(`${BASE_URL}/creator/delete-playlist/${payload}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};