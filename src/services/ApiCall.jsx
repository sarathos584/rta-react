import axios from "axios";
import { BaseUrl } from "./BaseUrl";

export const ApiCall = async (method, endPoint, data, params, is_formdata) => {
  var headers = {
    "Content-Type": is_formdata ? "multipart/form-data" : "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
    platform: "web",
  };
  var url = BaseUrl + endPoint;

  try {
    const res = await axios({
      method,
      url,
      params,
      data,
      headers,
    });
    var response = { status: true, message: res.data };

    return response;
  } catch (error) {
    if (
      error?.response.status &&
      error?.response.status === 401 &&
      localStorage.getItem("token")
    ) {
      localStorage.clear();
      window.location.href = "/login";
      return;
    }
   

    return error;
  }
};
