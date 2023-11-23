import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const fetchCreatorVideoAPI = (payload) => {
  return axios.get(`${BASE_URL}/video/fetch-one-creator-video`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};