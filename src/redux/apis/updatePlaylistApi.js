import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const updatePlaylist = (payload) => {
  console.log(payload);
  return axios.put(
    `${BASE_URL}/creator/update-playlist`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};
