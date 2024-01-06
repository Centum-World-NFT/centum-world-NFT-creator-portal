import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const allRevenueApi = () => {
  return axios.get(`${BASE_URL}/creator/total-no-of-playlists-subscribers-revenue`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};