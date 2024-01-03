import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const playlistFetchAPI = (payload) => {
    console.log(payload)
  return axios.post(`${BASE_URL}/creator/fetch-playlists`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};