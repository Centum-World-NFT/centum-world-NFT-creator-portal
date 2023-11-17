import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const subscriberDerailsApi = (payload) => {
  return axios.post(`${BASE_URL}/creator/fetch-subscriber`, payload);
};
