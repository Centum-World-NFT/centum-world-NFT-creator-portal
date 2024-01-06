import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const KnowSubscriber = (payload) => {
    let data = {
        "id":payload
    }
  console.log(payload)
  return axios.post(`${BASE_URL}/user/get-user/`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};