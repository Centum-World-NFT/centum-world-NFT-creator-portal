import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const replyComment = (payload) => {
  return axios.post(
    `${BASE_URL}/video/add-reply-to-comment/${payload.id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};
