import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const profilepicAPI = (formData) => {
  return axios.put(`${BASE_URL}/creator/upload-creator-profile-pic `, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};