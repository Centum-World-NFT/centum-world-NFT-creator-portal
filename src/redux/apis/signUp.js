import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const signUpAPI = (payload) => {
  return axios.post(`${BASE_URL}/creator/signup-creator`, payload);
};
