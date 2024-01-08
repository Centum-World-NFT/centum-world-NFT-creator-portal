import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const bestcourseApi = () => {
  return axios.get(`${BASE_URL}/creator/best-course-of-creator`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};