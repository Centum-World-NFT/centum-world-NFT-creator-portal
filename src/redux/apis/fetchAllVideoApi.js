import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const fetchPlaylistVideoAPI = (payload) => {
    console.log(payload)
  return axios.get(`${BASE_URL}/admin/fetch-videos-by-course-id/${payload.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};