import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const addToPlaylistAPI = (payload) => {
  const newid = {
    id: payload,
  };
  return axios.post(`${BASE_URL}/video/select-video/`, newid, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const publishPlaylistAPI = (payload) => {
  return axios.post(`${BASE_URL}/creator/create-playlist`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
