import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
import { showMessage } from "./status";
import { domain } from "@/config/index";

const http = axios.create({
  baseURL: domain,
  timeout: 50000,
  withCredentials: false,
});

http.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers["ZRT-MEMBER-TOKEN"] = localStorage.getItem("token");
  }
  return config;
});
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 错误响应信息
    if (error && error.response) {
      return Promise.reject(showMessage(error.response.status));
    }
    return Promise.reject(showMessage(""));
  }
);

export function post(url, data = {}, headers, type = "POST") {
  let config = {};
  //判断类型是否要转
  switch (headers) {
    case "urlencoded":
      config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
      data = qs.stringify(data);
      break;
    case "formData" || "exe":
      config.headers = { "Content-Type": "multipart/form-data" };
      break;
    case "postBolb":
      config.responseType = "blob";
      break;
    case "formBolb":
      config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
      data = qs.stringify(data);
      config.responseType = "blob";
      break;
    default:
      config = headers;
      break;
  }
  // data作为请求体发送的的数据只适用put,post,patch
  let promiseData;
  return new Promise((resolve) => {
    switch (type) {
      case "POST":
        promiseData = http.post(url, data, config);
        break;
      case "PUT":
        promiseData = http.put(url, data, config);
        break;
      case "PATCH":
        promiseData = http.patch(url, data, config);
        break;
      default:
        break;
    }
    promiseData
      .then((result) => {
        resolve(result.data);
      })
      // 处理网络问题失败的请求，且不会继续向下执行
      .catch((error) => {
        // 错误会从上面传递下来
        Message.error(error);
      });
  });
}
export function get(url, config = {}, type = "GET") {
  // 非data作为请求体发送的的数据只适用get,delete,head,options
  let promise;
  return new Promise((resolve) => {
    switch (type) {
      case "GET":
        promise = http.get(url, config);
        break;
      case "DELETE":
        promise = http.delete(url, config);
        break;
      case "HEAD":
        promise = http.head(url, config);
        break;
      case "OPTIONS":
        promise = http.options(url, config);
        break;
      default:
        break;
    }
    promise
      .then((result) => resolve(result.data))
      // 处理失败的请求
      .catch((error) => {
        Message.error(error);
      });
  });
}
