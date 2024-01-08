 import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const revAndSubs = () => {
  return axios.get(`${BASE_URL}/creator/get-monthly-revenue-and-subscibers-of-creator`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};