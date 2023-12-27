import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const mycourseApi = (payload) => {
  return axios.post(`${BASE_URL}/creator/fetch-my-subscribers`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
