import axios from "axios";
import moment from "moment-timezone";
import { TOKEN_ID } from "../../constants/token";
import { BASE_URL } from "../../constants/path";

export const setHeader = async (contentType) => {
  const headers = {
    "Content-Type": contentType || "application/json; charset=utf-8",
    "X-Timezone-Offset": moment.tz.guess(),
    tokenCybersoft: TOKEN_ID,
  };

  return headers;
};

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;

export const getData = async ({ url, responseType, params }) =>
  instance({
    method: "get",
    headers: await setHeader(),
    url,
    responseType,
    params,
  });

export const postData = async ({ url, responseType, data, contentType }) =>
  instance({
    method: "post",
    headers: await setHeader(contentType),
    url,
    responseType,
    data,
  });

export const putData = async ({ url, responseType, data, contentType }) =>
  instance({
    method: "put",
    headers: await setHeader(contentType),
    url,
    responseType,
    data,
  });

export const deleteData = async ({ url }) =>
  instance({
    method: "delete",
    headers: await setHeader(),
    url,
  });
