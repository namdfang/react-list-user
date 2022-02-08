import axios from "axios";
import * as Config from "./config";

export default function callApi(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  });
}
