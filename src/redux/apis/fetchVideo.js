import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const fetchCreatorVideoAPI = (payload) => {
  const newPayload = {
    id: payload,
  };
  return axios.post(`${BASE_URL}/video/fetch-one-creator-video`, newPayload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
