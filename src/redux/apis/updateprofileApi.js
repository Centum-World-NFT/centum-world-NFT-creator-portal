
import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const updateProfileApi = (payload) => {
  return axios.put(`${BASE_URL}/creator/update-creator`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
