import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const createVideoAPI = (formData) => {
  console.log(formData)
  return axios.post(
    `${BASE_URL}/video/upload-video`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );;
};
