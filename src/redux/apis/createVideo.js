import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const createVideoAPI = (payload) => {
  return axios.post(`${BASE_URL}/video/upload-video`, payload);
};
