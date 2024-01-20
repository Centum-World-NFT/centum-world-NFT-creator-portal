import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const fetchSingleVideo = (payload) => {
  console.log(payload);
  return axios.post(`${BASE_URL}/video/fetch-video`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
