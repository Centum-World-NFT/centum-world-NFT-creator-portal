import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const fetchPlaylistEditAPI = (payload) => {
  console.log(payload);
  return axios.get(`${BASE_URL}/creator/fetch-playlist/${payload.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
